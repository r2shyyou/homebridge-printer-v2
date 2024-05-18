<p align="center">
    <img src="https://github.com/r2shyyou/homebridge-printer-v2/blob/main/images/printer_logo.png" height="200">
</p>



# homebridge-printer

**Forked from [seydx/homebridge-printer](https://github.com/SeydX/homebridge-printer)**

## Info

This is a dynamic platform plugin for [Homebridge](https://github.com/nfarina/homebridge) to check the state of your ipp (AirPrint) capable printer.

This Plugin creates a Switch Accessory and ContactSensor Accessory with FakeGato functionality. The Switch Accessory shows if the printer is online or offline and the ContactSensor Accessory shows if the printer is printing.

## Installation instructions

After [Homebridge](https://github.com/nfarina/homebridge) has been installed:

-  ```sudo npm i -g homebridge-printer-v2@latest```


## Basic configuration

 ```
{
  "bridge": {
    ...
  },
  "accessories": [
    ...
  ],
  "platforms": [
    {
      "platform": "PrinterPlatform",
      "debug": true,
      "printer":[
        {
          "name": "HP Envy Pro",
          "address": "http://hpf92bab4321ab:631/ipp/printer",
          "polling": 10,
          "marker": true,
          "switchType": "SWITCH",
          "manufacturer": "HP",
          "model": "Envy Pro",
          "serialNumber": "12345"
        }
      ]
    }
  ]
}
 ```
 See [Example Config](https://github.com/r2shyyou/homebridge-printer-v2/blob/master/example-config.json) for more details.

 
 ## Options

| **Attributes** | **Required** | **Usage** |
|------------|----------|-------|
| platform | **Yes** | Must be **PrinterPlatform** |
| debug | **No** | Enables additional output in the log. |
| printer.address | **Yes** | IPP address of the printer. |
| printer.polling | **No** | Printer state polling. (Default: 10s) |
| printer.marker | **No** | If enabled, a new filter characteristic will be shown within printer accessory to show marker level. (Default: false) |
| printer.switchType | **No** | Accessory type of the printer switch. If "CHARACTERISTIC" is choosen, the printer switch will be shown as a characteristic within contact accessory. (Default: SWITCH) |
| printer.manufacturer | **No** | Manufacturer name for display in the Home app. |
| printer.model | **No** | Model name for display in the Home app. |
| printer.serialNumber | **No** | Serialnumber for display in the Home app. |

## Supported clients

This plugin has been verified to work with the following apps on iOS 12.2 and iOS 12.3 Beta:

* iOS 14+
* Apple Home
* All 3rd party apps like Elgato Eve etc.
* Homebridge v1.1.6+


## Contributing

You can contribute to this homebridge plugin in following ways:

- [Report issues](https://github.com/r2shyyou/homebridge-printer-v2/issues) and help verify fixes as they are checked in.
- Review the [source code changes](https://github.com/r2shyyou/homebridge-printer-v2/pulls).
- Contribute bug fixes.
- Contribute changes to extend the capabilities

Pull requests are accepted.


## Troubleshooting

If you have any issues with the plugin then you can run this plugin in debug mode, which will provide some additional information. This might be useful for debugging issues. Just enable ``debug`` in your config and restart homebridge.
