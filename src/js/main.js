/*
 * Ignition.io website. Copyright 2016 Alexander Stubbs. All Rights Reserved.
 * Creative Commons Attribution NonCommercial (CC-BY-NC) 
 * https://tldrlegal.com/license/creative-commons-attribution-noncommercial-%28cc-nc%29#summary
 *
 * Simple Landing Page for Ignition Project Page.
 *
 */

var moment = require('moment/moment.js'),   
    $      = require('jquery/dist/jquery.js');

function updateHeader(sum) {
    $("#lines").text(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
}

$(document).ready(function($) {
 
    var fStats = $("#fStat").text(),
        fStats = fStats.mtime,
        fStats = moment(fStats).fromNow();

        $("#commit").text(fStats);

        fetch('https://api.github.com/repos/alexjstubbs/ignition-dev/stats/contributors');
        .then((response)            => response.json());
        .then((contributors)        => contributors;
        .map((contributor)          => contributor.weeks;
        .reduce((lineCount, week)   => lineCount + week.a - week.d, 0)));
        .then((lineCounts)          => lineCounts.reduce((lineTotal, lineCount) => lineTotal + lineCount));
        .then((lines)               => updateHeader(lines));
        


})
