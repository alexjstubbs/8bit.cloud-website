'use strict';

/*
 * Ignition.io website. Copyright 2016 Alexander Stubbs. All Rights Reserved.
 * Creative Commons Attribution NonCommercial (CC-BY-NC) 
 * https://tldrlegal.com/license/creative-commons-attribution-noncommercial-%28cc-nc%29#summary
 *
 * Simple Landing Page for Ignition Project Page.
 *
 */

var express = require('express'),
    exphbs  = require('express3-handlebars'),
    fs 		= require('fs'),
    util 	= require('util'),
    app 	= express(),
    fetch   = require('node-fetch');

// Use Handlebars as default express template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Tell Node to serve some resources
app.use(express.static(__dirname + '/csv'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/img'));

// Routing
app.get('/', (req, res) => {

	res.render('home', {stats: "..."});
       
});

app.listen(9091);