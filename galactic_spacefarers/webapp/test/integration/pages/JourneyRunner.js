sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"galactic/galacticspacefarers/test/integration/pages/SpacefarersList",
	"galactic/galacticspacefarers/test/integration/pages/SpacefarersObjectPage"
], function (JourneyRunner, SpacefarersList, SpacefarersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('galactic/galacticspacefarers') + '/test/flp.html#app-preview',
        pages: {
			onTheSpacefarersList: SpacefarersList,
			onTheSpacefarersObjectPage: SpacefarersObjectPage
        },
        async: true
    });

    return runner;
});

