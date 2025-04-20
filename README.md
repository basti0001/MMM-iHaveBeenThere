# MMM-iHaveBeenThere

**MMM-iHaveBeenThere** is a module for MagicMirror² to visualize where one has been traveled.

It can draw a worldmap or a world section with points of interest (POI). The POI's are linked with a line and an animated plane can fly from the your home origin to you poi where you have been.

This can be used to show your traveled places in the world. Pretty fancy ;-)

![screenshot](picture/example.png)

## Dependencies

- [Amcharts](https://www.amcharts.com/demos/), many thanks to Martynas Majeris
- [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror)

## Installation

1. clone this repo into the modules directory and install the dependencies:

   ```bash
   cd ~/MagicMirror/modules
   git clone https://github.com/basti0001/MMM-iHaveBeenThere
   cd MMM-iHaveBeenThere
   npm install
   ```

2. create a config (see below).
3. add your gps coordinates.
4. done!

## Configuration options

<table width="100%">
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
    <br><b>Values:</b> <code>string</code>, see <i>MMM-iHaveBeenThere configuration</i> below.
    <br><b>Default value:</b> <i>An example world.</i>
   </td>
  </tr>
  <tr>
   <td><code>AnimationEnabled</code></td>
   <td>enable/disable the plane animation.<br>
    <br><b>Values:</b> <code>true</code> or <code>false</code>
    <br><b>Default value:</b> <code>true</code>
   </td>
  </tr>
  <tr>
   <td><code>pauseDuration</code></td>
   <td>Time in s how long the plane stays at a point if animation is enabled.<br>
    <br><b>Values:</b> <code>0.0</code> or <code>any</code>
    <br><b>Default value:</b> <code>3.0</code>
   </td>
  </tr>
  <tr>
   <td><code>animationDuration</code></td>
   <td>Time in s how long the plane flies from point to point if animation is enabled.<br>
    <br><b>Values:</b> <code>0.0</code> or <code>any</code>
    <br><b>Default value:</b> <code>10.0</code>
   </td>
  </tr>
  <tr>
   <td><code>zoomLevel</code></td>
   <td>Set map region parameter.<br>
    <br><b>Values:</b> <code>0.0</code> or <code>any</code>
    <br><b>Default value:</b> <code>5.4</code>for central europe.
   </td>
  </tr>
  <tr>
   <td><code>zoomLongitude</code></td>
   <td>Set map region parameter.<br>
    <br><b>Values:</b> <code>0.0</code> or <code>any</code>
    <br><b>Default value:</b> <code>-2.0</code>for central europe.
   </td>
  </tr>
  <tr>
   <td><code>animationDuration</code></td>
   <td>Set map region parameter.<br>
    <br><b>Values:</b> <code>0.0</code> or <code>any</code>
    <br><b>Default value:</b> <code>46.0</code>for central europe.
   </td>
  </tr>
  <tr>
   <td><code>home_lat, home_lon</code></td>
   <td>Latitude/longitude of the your home.<br>
    <br><b>Values:</b> <code>float</code>
    <br><b>Default value:</b> e.g. lat <code>48.1548256</code>for munich.
   </td>
  </tr>
  <tr>
   <td><code>home_desc</code></td>
   <td>Your Homename.<br>
    <br><b>Values:</b> <code>string</code>
    <br><b>Default value:</b> <code>"München"</code>For munich.
   </td>
  </tr>
  <tr>
   <td><code>away_lat, away_lon</code></td>
   <td>Latitude/longitude of destinations you have visited.<br>
    <br><b>Values:</b> <code>array[float]</code>
   </td>
  </tr>
  <tr>
   <td><code>away_desc</code></td>
   <td>City/Country names of destinations you have visited.<br>
    <br><b>Values:</b> <code>array[string]</code>
   </td>
  </tr>
  <tr>
   <td><code>displayDesc</code></td>
   <td>Display the descriptions of the destinations you have visited<br>
    <br><b>Values:</b> <code>true</code> or <code>false</code>
    <br><b>Default value:</b> <code>true</code></td>
  </tr>
  <tr>
   <td><code>trip</code></td>
   <td>Controls if every single entry is counted as a new jurney or a round trip.<br>
    <br><b>Values:</b> <code>array[bool]</code>
   </td>
  </tr>
  <tr>
   <td><code>colorCountries, colorCountryBorders, colorTargetPoints, colorPlaneLine, colorLegendBorder, colorLegendFont, colorTitleFont</code></td>
   <td>Colors for country fill, country border, target points, plane, legend, legend font, title.<br>
    <br><b>Value:</b> <code>string</code>
    <br><b>Default value:</b> e.g.<code>"#BDBDBD"</code>
   </td>
  </tr>
 </tbody>
</table>

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:

```javascript
   {
      module: "MMM-iHaveBeenThere",
      position: "middle_center",
      config: {
         title: "Dork the Explorer",
         home_desc: "Edinburgh",
         AnimationEnabled: true,
         zoomLevel: 1.1,
         zoomLongitude: 15,
         home_lat: 55.9411289,
         home_lon: -3.3454172,
         displayDesc: true,
         away_desc: [
            "Thailand",
            "France",
            "United States"
         ],
         away_lat: [
            13.5485582,
            48.8587741,
            47.6129432,
         ],
         away_lon: [
            100.6111107,
            2.2069809,
            -122.4821436,
         ],
         trip: [false,true,false],
      }
   },
```

Depending on the used [Raspberry Pi](https://de.wikipedia.org/wiki/Raspberry_Pi) hardware I recommend to disable the plane animation (though it looks nice).

The models A, B, B+ run only contain a single CPU core. I tried the B+ with 1Ghz (overclocking). The CPU load was at 100% and the animation laged.

Also I used [MMM-FRITZ-Box-Callmonitor](https://github.com/paviro/MMM-FRITZ-Box-Callmonitor) and was missing incoming calls with this setup. For this mentioned Pi's I recommend to disable the animation or set.

<table width="100%">
 <thead>
  <tr>
   <th>Option</th>
   <th width="100%">Description</th>
  </tr>
 <thead>
 <tbody>
  <tr>
   <td><code>AnimationEnabled</code></td>
   <td><b>value:</b> <code>true</code>
   </td>
  </tr>
  <tr>
   <td><code>pauseDuration</code></td>
   <td><b>value:</b> <code>10.0</code></td>
  </tr>
  <tr>
   <td><code>animationDuration</code></td>
   <td><b>value:</b> <code>3.0</code></td>
  </tr>
 </tbody>
</table>

This should give the Pi a little space between the animations. Not a pretty good solution, but during the animation you might have problems.

With a Pi 3 I had a load of 40% when the animation is running. Dualcore pays off. Also the animation is smooth.

Testing the animation with a Pi 4 resulted in smooth animation. The CPU load was approximately 43%, so be aware that this may conflict with other modules that have high CPU demands.

## To Do

Upgrade from amCharts 3 to amCharts 5: The new version is supposed to be a lot more CPU-efficient, so this could possibly solve the performance problems. You are welcome to create a PR.
