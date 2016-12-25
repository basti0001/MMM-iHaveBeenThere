# Module: MMM-iHaveBeenThere
The `MMM-iHaveBeenThere` is a extension module for the MagicMirror to visulize where one has been traveled.

It can draw a worldmap or a world section with points of interest (poi). The poi's are
linked with a line and an animated plane can fly from the your home origin to you poi where you have been.
This can be used to show your traveled places in the world. Pretty fancy ;-)

Since at present I use additional non free js code, I have to check the license situation first. Depending on this, the
sry code will be committed. Just be a little patient.

##Dependencies
- [MagigMirror](https://github.com/MichMich/MagicMirror)
- [Amcharts](https://www.amcharts.com/demos/)


## Installation
1. simply check out this repro (destination should be [Path2YourMirror]/MagicMirror/modules/
2. create a config (s. below).
3. add your gps coordinates.
3. done!

## Configuration options

<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>title</code></td>
			<td>The title of the world chart.<br>
				<br><b>Possible values:</b> An array, see <i>MMM-iHaveBeenThere configuration</i> below.
				<br><b>Default value:</b> <i>An example world.</i>
			</td>
		</tr>
		<tr>
			<td><code>AnimationEnabled</code></td>
			<td>enable/disable the plane animation.<br>
				<br><b>Possible values:</b> <code>true</code> or <code>false</code>
				<br><b>Default value:</b> <code>true</code>
			</td>
		</tr>
		<tr>
			<td><code>displaySymbol</code></td>
			<td>Display a symbol in front of an entry.<br>
				<br><b>Possible values:</b> <code>true</code> or <code>false</code>
				<br><b>Default value:</b> <code>true</code>
			</td>
		</tr>
		<tr>
			<td><code>defaultSymbol</code></td>
			<td>The default symbol.<br>
				<br><b>Possible values:</b> See <a href="http://fontawesome.io/icons/" target="_blank">Font Awsome</a> website.
				<br><b>Default value:</b> <code>calendar</code>
			</td>
		</tr>
		<tr>
			<td><code>maxTitleLength</code></td>
			<td>The maximum title length.<br>
				<br><b>Possible values:</b> <code>10</code> - <code>50</code>
				<br><b>Default value:</b> <code>25</code>
			</td>
		</tr>
		<tr>
			<td><code>fetchInterval</code></td>
			<td>How often does the content needs to be fetched? (Milliseconds)<br>
				<br><b>Possible values:</b> <code>1000</code> - <code>86400000</code>
				<br><b>Default value:</b> <code>300000</code> (5 minutes)
			</td>
		</tr>
		<tr>
			<td><code>animationSpeed</code></td>
			<td>Speed of the update animation. (Milliseconds)<br>
				<br><b>Possible values:</b><code>0</code> - <code>5000</code>
				<br><b>Default value:</b> <code>2000</code> (2 seconds)
			</td>
		</tr>
		<tr>
			<td><code>fade</code></td>
			<td>Fade the future events to black. (Gradient)<br>
				<br><b>Possible values:</b> <code>true</code> or <code>false</code>
				<br><b>Default value:</b> <code>true</code>
			</td>
		</tr>
		<tr>
			<td><code>fadePoint</code></td>
			<td>Where to start fade?<br>
				<br><b>Possible values:</b> <code>0</code> (top of the list) - <code>1</code> (bottom of list)
				<br><b>Default value:</b> <code>0.25</code>
			</td>
		</tr>
		<tr>
			<td><code>calendars</code></td>
			<td>The list of calendars.<br>
				<br><b>Possible values:</b> An array, see <i>calendar configuration</i> below.
				<br><b>Default value:</b> <i>An example calendar.</i>
			</td>
		</tr>
		<tr>
			<td><code>titleReplace</code></td>
			<td>An object of textual replacements applied to the tile of the event. This allow to remove or replace certains words in the title.<br>
				<br><b>Example:</b> <br>

				<code>
					titleReplace: {'Birthday of ' : '', 'foo':'bar'}
				</code>
			</td>
		</tr>
		<tr>
			<td><code>displayRepeatingCountTitle</code></td>
			<td>Show count title for yearly repeating events (e.g. "X. Birthday", "X. Anniversary")<br>
				<br><b>Possible values:</b> <code>true</code> or <code>false</code>
				<br><b>Default value:</b> <code>false</code>
			</td>
		</tr>
		<tr>
			<td><code>timeFormat</code></td>
			<td>Display event times as absolute dates, or relative time<br>
				<br><b>Possible values:</b> <code>absolute</code> or <code>relative</code>
				<br><b>Default value:</b> <code>relative</code>
			</td>
		</tr>
		<tr>
			<td><code>urgency</code></td>
			<td>When using a timeFormat of <code>absolute</code>, the <code>urgency</code> setting allows you to display events within a specific time frame as <code>relative</code>
			    This allows events within a certain time frame to be displayed as relative (in xx days) while others are displayed as absolute dates<br>
				<br><b>Possible values:</b> a positive integer representing the number of days for which you want a relative date, for example <code>7</code> (for 7 days)<br>
				<br><b>Default value:</b> <code>0</code> (disabled)
			</td>
		</tr>
	</tbody>
</table>

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-iHaveBeenThere',
		position: 'lower_third',	// bigger place is recommended.
		config: {
			// The config property is optional.
			// If no config is set, an example MMM-iHaveBeenThere is shown.
			// See 'Configuration options' for more information.
		}
	}
]
````

The MIT License (MIT)
=====================

Copyright © 2016 Sebastian Merkel

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, 
fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, 
whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**


