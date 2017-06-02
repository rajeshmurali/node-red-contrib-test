node-red-nodes-test
======================
A <a href="http://www.biba.uni-bremen.de/institut/mitarbeiter/homepage.html?nick=raj" target="_new">BIBA-Rajesh</a> UI that attempts to  fetch the data using the Input url.


Install

-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

	npm install node-red-nodes-test

Usage

-----



Uses the Csharpliblib npm to fetch the data using the Input url and create a json string as its output.



Contains the output in `msg.payload`.



**Note** : this only operates on payloads of type <b>string</b>. Everything else is blocked.
