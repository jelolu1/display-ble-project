// https://stackoverflow.com/questions/47764906/how-to-receive-data-from-bluetooth-device-using-node-js
// https://github.com/chrvadala/node-ble
// https://npm.io/package/webbluetooth

const { bluetooth, destroy } = require('node-ble').createBluetooth();
const TEST_DEVICE = '9C:6B:72:AE:87:D6';
// const TEST_DEVICE = '0B:9A:6E:1C:3C:C4';


async function main() {
    const adapter = await bluetooth.defaultAdapter();
    console.log('Adapter created');

    if (! await adapter.isDiscovering()) await adapter.startDiscovery();
    console.log('Discovering...');

    // get device and connect
    const device = await adapter.waitDevice(TEST_DEVICE);
    console.log('got device', await device.getAddress(), await device.getName());
    await device.connect();
    console.log('connected');
    // console.log('device', device);

    const gattServer = await device.gatt()
    // const service1 = await gattServer.getPrimaryService('uuid')
    // const characteristic1 = await service1.getCharacteristic('uuid')
    // await characteristic1.writeValue(Buffer.from("Hello world"))
    // const buffer = await characteristic1.readValue()
    // console.log(buffer)

}

main();

