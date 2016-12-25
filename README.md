# Module: MMM-iHaveBeenThere
The `iHaveBeenThere` is a module to visulize where one has been traveled for https://github.com/MichMich/MagicMirror 

It can draw a worldmap or a world section with points of interest (poi). The poi's are
linked with a line and an animated plane can fly from the your home origin to you poi where you have been.
This can be used to show your traveled places in the world. Pretty fancy ;-)

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'iHaveBeenThere',
		position: 'lower_third',	// bigger place is recommended.
		config: {
			// The config property is optional.
			// If no config is set, an example MMM-iHaveBeenThere is shown.
			// See 'Configuration options' for more information.
		}
	}
]
````
