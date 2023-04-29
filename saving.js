function legacySave(data) {
	"use strict";
	var localSave = $.extend({
		versionNumber: versionNumber,
		companyName: companyName,
		plasma: plasma,
		PSU: PSU,
		PSUT2: PSUT2,
		heater: heater,
		heaterToggled: heaterToggled,
		plasmatic: plasmatic,
		plasmaticToggled: plasmaticToggled,
		bath: bath,
		bathToggled: bathToggled,
		energy: energy,
		battery: battery,
		batteryT2: batteryT2,
		batteryT3: batteryT3,
		batteryT4: batteryT4,
		batteryT5: batteryT5,
		charcoalEngine: charcoalEngine,
		solarPanel: solarPanel,
		methaneStation: methaneStation,
		nuclearStation: nuclearStation,
		magmatic: magmatic,
		fusionReactor: fusionReactor,
		oil: oil,
		oilStorage: oilStorage,
		oilNextStorage: oilNextStorage,
		pump: pump,
		pumpjack: pumpjack,
		oilField: oilField,
		oilRig: oilRig,
		metal: metal,
		metalStorage: metalStorage,
		metalNextStorage: metalNextStorage,
		miner: miner,
		heavyDrill: heavyDrill,
		gigaDrill: gigaDrill,
		quantumDrill: quantumDrill,
		gem: gem,
		gemStorage: gemStorage,
		gemNextStorage: gemNextStorage,
		gemMiner: gemMiner,
		advancedDrill: advancedDrill,
		diamondDrill: diamondDrill,
		carbyneDrill: carbyneDrill,
		charcoal: charcoal,
		charcoalStorage: charcoalStorage,
		charcoalNextStorage: charcoalNextStorage,
		charcoalToggled: charcoalToggled,
		woodburner: woodburner,
		furnace: furnace,
		furnaceWoodInput: furnaceWoodInput,
		kiln: kiln,
		fryer: fryer,
		wood: wood,
		woodStorage: woodStorage,
		woodNextStorage: woodNextStorage,
		woodcutter: woodcutter,
		laserCutter: laserCutter,
		deforester: deforester,
		infuser: infuser,
		science: science,
		lab: lab,
		labT2: labT2,
		labT3: labT3,
		labT4: labT4,
		labT5: labT5,
		rocket: rocket,
		rocketFuel: rocketFuel,
		rocketFuelToggled: rocketFuelToggled,
		chemicalPlant: chemicalPlant,
		oxidisation: oxidisation,
		hydrazine: hydrazine,
		lunarite: lunarite,
		lunariteStorage: lunariteStorage,
		lunariteNextStorage: lunariteNextStorage,
		methane: methane,
		methaneStorage: methaneStorage,
		methaneNextStorage: methaneNextStorage,
		titanium: titanium,
		titaniumStorage: titaniumStorage,
		titaniumNextStorage: titaniumNextStorage,
		gold: gold,
		goldStorage: goldStorage,
		goldNextStorage: goldNextStorage,
		silver: silver,
		silverStorage: silverStorage,
		silverNextStorage: silverNextStorage,
		silicon: silicon,
		siliconStorage: siliconStorage,
		siliconNextStorage: siliconNextStorage,
		moonWorker: moonWorker,
		moonDrill: moonDrill,
		moonQuarry: moonQuarry,
		planetExcavator: planetExcavator,
		vacuum: vacuum,
		suctionExcavator: suctionExcavator,
		spaceCow: spaceCow,
		vent: vent,
		explorer: explorer,
		lunariteDrill: lunariteDrill,
		pentaDrill: pentaDrill,
		titanDrill: titanDrill,
		droid: droid,
		destroyer: destroyer,
		deathStar: deathStar,
		actuator: actuator,
		scout: scout,
		spaceLaser: spaceLaser,
		bertha: bertha,
		cannon: cannon,
		blowtorch: blowtorch,
		scorcher: scorcher,
		annihilator: annihilator,
		desert: desert,
		researchUnlocked: researchUnlocked,
		researched: researched,
		available: available,
		tabsUnlocked: tabsUnlocked,
		resourcesUnlocked: resourcesUnlocked,
		noBorder: noBorder,
		rocketLaunched: rocketLaunched,
		techUnlocked: techUnlocked,
		meteoriteUnlocked: meteoriteUnlocked,
		buttonsHidden: buttonsHidden,
		explored: explored,
		uranium: uranium,
		uraniumStorage: uraniumStorage,
		uraniumNextStorage: uraniumNextStorage,
		activated: activated,
		grinder: grinder,
		cubic: cubic,
		enricher: enricher,
		recycler: recycler,
		lava: lava,
		lavaStorage: lavaStorage,
		lavaNextStorage: lavaNextStorage,
		crucible: crucible,
		extractor: extractor,
		extruder: extruder,
		veluptuator: veluptuator,
		hydrogen: hydrogen,
		hydrogenStorage: hydrogenStorage,
		hydrogenNextStorage: hydrogenNextStorage,
		collector: collector,
		magnet: magnet,
		eCell: eCell,
		hindenburg: hindenburg,
		helium: helium,
		heliumStorage: heliumStorage,
		heliumNextStorage: heliumNextStorage,
		drone: drone,
		tanker: tanker,
		compressor: compressor,
		skimmer: skimmer,
		ice: ice,
		iceStorage: iceStorage,
		iceNextStorage: iceNextStorage,
		icePick: icePick,
		iceDrill: iceDrill,
		freezer: freezer,
		mrFreeze: mrFreeze,
		meteorite: meteorite,
		meteoriteStorage: meteoriteStorage,
		meteoriteNextStorage: meteoriteNextStorage,
		meteoriteToggled: meteoriteToggled,
		printer: printer,
		web: web,
		smasher: smasher,
		nebulous: nebulous,
		dyson: dyson,
		sphere: sphere,
		swarm: swarm,
		ring: ring,
		antimatter: antimatter,
		antimatterStorage: antimatterStorage,
		antimatterToggled: antimatterToggled,
		planetNuke: planetNuke,
		condensator: condensator,
		fossilator: fossilator,
		multiDrill: multiDrill,
		diamondChamber: diamondChamber,
		microPollutor: microPollutor,
		forest: forest,
		cloner: cloner,
		interCow: interCow,
		club: club,
		philosopher: philosopher,
		werewolf: werewolf,
		tardis: tardis,
		harvester: harvester,
		cage: cage,
		overexchange: overexchange,
	}, data);

	return localSave;
}

function legacyLoad(savegane){
	"use strict";
	
	if(savegane){
		if(typeof savegane.companyName !== "undefined") companyName = savegane.companyName;
		if(typeof savegane.plasma !== "undefined") plasma = savegane.plasma;
		if(typeof savegane.PSU !== "undefined") PSU = savegane.PSU;
		if(typeof savegane.PSUT2 !== "undefined") PSUT2 = savegane.PSUT2;
		if(typeof savegane.heater !== "undefined") heater = savegane.heater;
		if(typeof savegane.heaterToggled !== "undefined") heaterToggled = savegane.heaterToggled;
		if(typeof savegane.plasmatic !== "undefined") plasmatic = savegane.plasmatic;
		if(typeof savegane.plasmaticToggled !== "undefined") plasmaticToggled = savegane.plasmaticToggled;
		if(typeof savegane.bath !== "undefined") bath = savegane.bath;
		if(typeof savegane.bathToggled !== "undefined") bathToggled = savegane.bathToggled;
		if(typeof savegane.energy !== "undefined") energy = savegane.energy;
		if(typeof savegane.battery !== "undefined") battery = savegane.battery;
		if(typeof savegane.batteryT2 !== "undefined") batteryT2 = savegane.batteryT2;
		if(typeof savegane.batteryT3 !== "undefined") batteryT3 = savegane.batteryT3;
		if(typeof savegane.batteryT4 !== "undefined") batteryT4 = savegane.batteryT4;
		if(typeof savegane.batteryT5 !== "undefined") batteryT5 = savegane.batteryT5;
		if(typeof savegane.charcoalEngine !== "undefined") charcoalEngine = savegane.charcoalEngine;
		if(typeof savegane.solarPanel !== "undefined") solarPanel = savegane.solarPanel;
		if(typeof savegane.methaneStation !== "undefined") methaneStation = savegane.methaneStation;
		if(typeof savegane.nuclearStation !== "undefined") nuclearStation = savegane.nuclearStation;
		if(typeof savegane.magmatic !== "undefined") magmatic = savegane.magmatic;
		if(typeof savegane.fusionReactor !== "undefined") fusionReactor = savegane.fusionReactor;
		if(typeof savegane.oil !== "undefined") oil = savegane.oil;
		if(typeof savegane.oilStorage !== "undefined") oilStorage = savegane.oilStorage;
		if(typeof savegane.oilNextStorage !== "undefined") oilNextStorage = savegane.oilNextStorage;
		if(typeof savegane.pump !== "undefined") pump = savegane.pump;
		if(typeof savegane.pumpjack !== "undefined") pumpjack = savegane.pumpjack;
		if(typeof savegane.oilField !== "undefined") oilField = savegane.oilField;
		if(typeof savegane.oilRig !== "undefined") oilRig = savegane.oilRig;
		if(typeof savegane.metal !== "undefined") metal = savegane.metal;
		if(typeof savegane.metalStorage !== "undefined") metalStorage = savegane.metalStorage;
		if(typeof savegane.metalNextStorage !== "undefined") metalNextStorage = savegane.metalNextStorage;
		if(typeof savegane.miner !== "undefined") miner = savegane.miner;
		if(typeof savegane.heavyDrill !== "undefined") heavyDrill = savegane.heavyDrill;
		if(typeof savegane.gigaDrill !== "undefined") gigaDrill = savegane.gigaDrill;
		if(typeof savegane.quantumDrill !== "undefined") quantumDrill = savegane.quantumDrill;
		if(typeof savegane.gem !== "undefined") gem = savegane.gem;
		if(typeof savegane.gemStorage !== "undefined") gemStorage = savegane.gemStorage;
		if(typeof savegane.gemNextStorage !== "undefined") gemNextStorage = savegane.gemNextStorage;
		if(typeof savegane.gemMiner !== "undefined") gemMiner = savegane.gemMiner;
		if(typeof savegane.advancedDrill !== "undefined") advancedDrill = savegane.advancedDrill;
		if(typeof savegane.diamondDrill !== "undefined") diamondDrill = savegane.diamondDrill;
		if(typeof savegane.carbyneDrill !== "undefined") carbyneDrill = savegane.carbyneDrill;
		if(typeof savegane.charcoal !== "undefined") charcoal = savegane.charcoal;
		if(typeof savegane.charcoalStorage !== "undefined") charcoalStorage = savegane.charcoalStorage;
		if(typeof savegane.charcoalNextStorage !== "undefined") charcoalNextStorage = savegane.charcoalNextStorage;
		if(typeof savegane.charcoalToggled !== "undefined") charcoalToggled = savegane.charcoalToggled;
		if(typeof savegane.woodburner !== "undefined") woodburner = savegane.woodburner;
		if(typeof savegane.furnace !== "undefined") furnace = savegane.furnace;
		if(typeof savegane.furnaceWoodInput !== "undefined") furnaceWoodInput = savegane.furnaceWoodInput;
		if(typeof savegane.kiln !== "undefined") kiln = savegane.kiln;
		if(typeof savegane.fryer !== "undefined") fryer = savegane.fryer;
		if(typeof savegane.wood !== "undefined") wood = savegane.wood;
		if(typeof savegane.woodStorage !== "undefined") woodStorage = savegane.woodStorage;
		if(typeof savegane.woodNextStorage !== "undefined") woodNextStorage = savegane.woodNextStorage;
		if(typeof savegane.woodcutter !== "undefined") woodcutter = savegane.woodcutter;
		if(typeof savegane.laserCutter !== "undefined") laserCutter = savegane.laserCutter;
		if(typeof savegane.deforester !== "undefined") deforester = savegane.deforester;
		if(typeof savegane.infuser !== "undefined") infuser = savegane.infuser;
		if(typeof savegane.science !== "undefined") science = savegane.science;
		if(typeof savegane.lab !== "undefined") lab = savegane.lab;
		if(typeof savegane.labT2 !== "undefined") labT2 = savegane.labT2;
		if(typeof savegane.labT3 !== "undefined") labT3 = savegane.labT3;
		if(typeof savegane.labT4 !== "undefined") labT4 = savegane.labT4;
		if(typeof savegane.labT5 !== "undefined") labT5 = savegane.labT5;
		if(typeof savegane.rocket !== "undefined") rocket = savegane.rocket;
		if(typeof savegane.rocketFuel !== "undefined") rocketFuel = savegane.rocketFuel;
		if(typeof savegane.rocketFuelToggled !== "undefined") rocketFuelToggled = savegane.rocketFuelToggled;
		if(typeof savegane.chemicalPlant !== "undefined") chemicalPlant = savegane.chemicalPlant;
		if(typeof savegane.oxidisation !== "undefined") oxidisation = savegane.oxidisation;
		if(typeof savegane.hydrazine !== "undefined") hydrazine = savegane.hydrazine;
		if(typeof savegane.spaceMetal !== "undefined") lunarite = savegane.spaceMetal;
		if(typeof savegane.lunarite !== "undefined") lunarite = savegane.lunarite;
		if(typeof savegane.spaceMetalStorage !== "undefined") lunariteStorage = savegane.spaceMetalStorage;
		if(typeof savegane.lunariteStorage !== "undefined") lunariteStorage = savegane.lunariteStorage;
		if(typeof savegane.spaceMetalNextStorage !== "undefined") lunariteNextStorage = savegane.spaceMetalNextStorage;
		if(typeof savegane.lunariteNextStorage !== "undefined") lunariteNextStorage = savegane.lunariteNextStorage;
		if(typeof savegane.methane !== "undefined") methane = savegane.methane;
		if(typeof savegane.methaneStorage !== "undefined") methaneStorage = savegane.methaneStorage;
		if(typeof savegane.methaneNextStorage !== "undefined") methaneNextStorage = savegane.methaneNextStorage;
		if(typeof savegane.titanium !== "undefined") titanium = savegane.titanium;
		if(typeof savegane.titaniumStorage !== "undefined") titaniumStorage = savegane.titaniumStorage;
		if(typeof savegane.titaniumNextStorage !== "undefined") titaniumNextStorage = savegane.titaniumNextStorage;
		if(typeof savegane.gold !== "undefined") gold = savegane.gold;
		if(typeof savegane.goldStorage !== "undefined") goldStorage = savegane.goldStorage;
		if(typeof savegane.goldNextStorage !== "undefined") goldNextStorage = savegane.goldNextStorage;
		if(typeof savegane.silver !== "undefined") silver = savegane.silver;
		if(typeof savegane.silverStorage !== "undefined") silverStorage = savegane.silverStorage;
		if(typeof savegane.silverNextStorage !== "undefined") silverNextStorage = savegane.silverNextStorage;
		if(typeof savegane.silicon !== "undefined") silicon = savegane.silicon;
		if(typeof savegane.siliconStorage !== "undefined") siliconStorage = savegane.siliconStorage;
		if(typeof savegane.siliconNextStorage !== "undefined") siliconNextStorage = savegane.siliconNextStorage;
		if(typeof savegane.lava !== "undefined") lava = savegane.lava;
		if(typeof savegane.lavaStorage !== "undefined") lavaStorage = savegane.lavaStorage;
		if(typeof savegane.lavaNextStorage !== "undefined") lavaNextStorage = savegane.lavaNextStorage;
		if(typeof savegane.hydrogen !== "undefined") hydrogen = savegane.hydrogen;
		if(typeof savegane.hydrogenStorage !== "undefined") hydrogenStorage = savegane.hydrogenStorage;
		if(typeof savegane.hydrogenNextStorage !== "undefined") hydrogenNextStorage = savegane.hydrogenNextStorage;
		if(typeof savegane.helium !== "undefined") helium = savegane.helium;
		if(typeof savegane.heliumStorage !== "undefined") heliumStorage = savegane.heliumStorage;
		if(typeof savegane.heliumNextStorage !== "undefined") heliumNextStorage = savegane.heliumNextStorage;
		if(typeof savegane.ice !== "undefined") ice = savegane.ice;
		if(typeof savegane.iceStorage !== "undefined") iceStorage = savegane.iceStorage;
		if(typeof savegane.iceNextStorage !== "undefined") iceNextStorage = savegane.iceNextStorage;
		if(typeof savegane.meteorite !== "undefined") meteorite = savegane.meteorite;
		if(typeof savegane.meteoriteStorage !== "undefined") meteoriteStorage = savegane.meteoriteStorage;
		if(typeof savegane.meteoriteNextStorage !== "undefined") meteoriteNextStorage = savegane.meteoriteNextStorage;
		if(typeof savegane.moonWorker !== "undefined") moonWorker = savegane.moonWorker;
		if(typeof savegane.moonDrill !== "undefined") moonDrill = savegane.moonDrill;
		if(typeof savegane.moonQuarry !== "undefined") moonQuarry = savegane.moonQuarry;
		if(typeof savegane.planetExcavator !== "undefined") planetExcavator = savegane.planetExcavator;
		if(typeof savegane.vacuum !== "undefined") vacuum = savegane.vacuum;
		if(typeof savegane.suctionExcavator !== "undefined") suctionExcavator = savegane.suctionExcavator;
		if(typeof savegane.spaceCow !== "undefined") spaceCow = savegane.spaceCow;
		if(typeof savegane.vent !== "undefined") vent = savegane.vent;
		if(typeof savegane.explorer !== "undefined") explorer = savegane.explorer;
		if(typeof savegane.spaceMetalDrill !== "undefined") lunariteDrill = savegane.spaceMetalDrill;
		if(typeof savegane.lunariteDrill !== "undefined") lunariteDrill = savegane.lunariteDrill;
		if(typeof savegane.pentaDrill !== "undefined") pentaDrill = savegane.pentaDrill;
		if(typeof savegane.titanDrill !== "undefined") titanDrill = savegane.titanDrill;
		if(typeof savegane.droid !== "undefined") droid = savegane.droid;
		if(typeof savegane.destroyer !== "undefined") destroyer = savegane.destroyer;
		if(typeof savegane.deathStar !== "undefined") deathStar = savegane.deathStar;
		if(typeof savegane.actuator !== "undefined") actuator = savegane.actuator;
		if(typeof savegane.scout !== "undefined") scout = savegane.scout;
		if(typeof savegane.spaceLaser !== "undefined") spaceLaser = savegane.spaceLaser;
		if(typeof savegane.bertha !== "undefined") bertha = savegane.bertha;
		if(typeof savegane.cannon !== "undefined") cannon = savegane.cannon;
		if(typeof savegane.blowtorch !== "undefined") blowtorch = savegane.blowtorch;
		if(typeof savegane.scorcher !== "undefined") scorcher = savegane.scorcher;
		if(typeof savegane.annihilator !== "undefined") annihilator = savegane.annihilator;
		if(typeof savegane.desert !== "undefined") desert = savegane.desert;
		if(typeof savegane.researchUnlocked !== "undefined") researchUnlocked = savegane.researchUnlocked;
		if(typeof savegane.researched !== "undefined") researched = savegane.researched;
		if(typeof savegane.tabsUnlocked !== "undefined") tabsUnlocked = savegane.tabsUnlocked;
		if(typeof savegane.available !== "undefined") available = savegane.available;
		if(typeof savegane.resourcesUnlocked !== "undefined") resourcesUnlocked = savegane.resourcesUnlocked;
		if(typeof savegane.noBorder !== "undefined") noBorder = savegane.noBorder;
		if(typeof savegane.rocketLaunched !== "undefined") rocketLaunched = savegane.rocketLaunched;
		if(typeof savegane.techUnlocked !== "undefined") techUnlocked = savegane.techUnlocked;
		if(typeof savegane.meteoriteUnlocked !== "undefined") meteoriteUnlocked = savegane.meteoriteUnlocked;
		if(typeof savegane.explored !== "undefined") explored = savegane.explored;
		if(typeof savegane.buttonsHidden !== "undefined") buttonsHidden = savegane.buttonsHidden;
		if(typeof savegane.uranium !== "undefined") uranium = savegane.uranium;
		if(typeof savegane.uraniumStorage !== "undefined") uraniumStorage = savegane.uraniumStorage;
		if(typeof savegane.uraniumNextStorage !== "undefined") uraniumNextStorage = savegane.uraniumNextStorage;
		if(typeof savegane.activated !== "undefined") activated = savegane.activated;
		if(typeof savegane.grinder !== "undefined") grinder = savegane.grinder;
		if(typeof savegane.cubic !== "undefined") cubic = savegane.cubic;
		if(typeof savegane.enricher !== "undefined") enricher = savegane.enricher;
		if(typeof savegane.recycler !== "undefined") recycler = savegane.recycler;
		if(typeof savegane.crucible !== "undefined") crucible = savegane.crucible;
		if(typeof savegane.extractor !== "undefined") extractor = savegane.extractor;
		if(typeof savegane.extruder !== "undefined") extruder = savegane.extruder;
		if(typeof savegane.veluptuator !== "undefined") veluptuator = savegane.veluptuator;
		if(typeof savegane.collector !== "undefined") collector = savegane.collector;
		if(typeof savegane.magnet !== "undefined") magnet = savegane.magnet;
		if(typeof savegane.eCell !== "undefined") eCell = savegane.eCell;
		if(typeof savegane.hindenburg !== "undefined") hindenburg = savegane.hindenburg;
		if(typeof savegane.drone !== "undefined") drone = savegane.drone;
		if(typeof savegane.tanker !== "undefined") tanker = savegane.tanker;
		if(typeof savegane.compressor !== "undefined") compressor = savegane.compressor;
		if(typeof savegane.skimmer !== "undefined") skimmer = savegane.skimmer;
		if(typeof savegane.icePick !== "undefined") icePick = savegane.icePick;
		if(typeof savegane.iceDrill !== "undefined") iceDrill = savegane.iceDrill;
		if(typeof savegane.freezer !== "undefined") freezer = savegane.freezer;
		if(typeof savegane.mrFreeze !== "undefined") mrFreeze = savegane.mrFreeze;
		if(typeof savegane.printer !== "undefined") printer = savegane.printer;
		if(typeof savegane.web !== "undefined") web = savegane.web;
		if(typeof savegane.smasher !== "undefined") smasher = savegane.smasher;
		if(typeof savegane.nebulous !== "undefined") nebulous = savegane.nebulous;
		if(typeof savegane.dyson !== "undefined") dyson = savegane.dyson;
		if(typeof savegane.sphere !== "undefined") sphere = savegane.sphere;
		if(typeof savegane.swarm !== "undefined") swarm = savegane.swarm;
		if(typeof savegane.ring !== "undefined") ring = savegane.ring;
		if(typeof savegane.antimatter !== "undefined") antimatter = savegane.antimatter;
		if(typeof savegane.antimatterStorage !== "undefined") antimatterStorage = savegane.antimatterStorage;
		if(typeof savegane.antimatterToggled !== "undefined") antimatterToggled = savegane.antimatterToggled;
		if(typeof savegane.planetNuke !== "undefined") planetNuke = savegane.planetNuke;
		if(typeof savegane.condensator !== "undefined") condensator = savegane.condensator;
		if(typeof savegane.fossilator !== "undefined") fossilator = savegane.fossilator;
		if(typeof savegane.multiDrill !== "undefined") multiDrill = savegane.multiDrill;
		if(typeof savegane.diamondChamber !== "undefined") diamondChamber = savegane.diamondChamber;
		if(typeof savegane.microPollutor !== "undefined") microPollutor = savegane.microPollutor;
		if(typeof savegane.forest !== "undefined") forest = savegane.forest;
		if(typeof savegane.cloner !== "undefined") cloner = savegane.cloner;
		if(typeof savegane.interCow !== "undefined") interCow = savegane.interCow;
		if(typeof savegane.club !== "undefined") club = savegane.club;
		if(typeof savegane.philosopher !== "undefined") philosopher = savegane.philosopher;
		if(typeof savegane.werewolf !== "undefined") werewolf = savegane.werewolf;
		if(typeof savegane.tardis !== "undefined") tardis = savegane.tardis;
		if(typeof savegane.harvester !== "undefined") harvester = savegane.harvester;
		if(typeof savegane.cage !== "undefined") cage = savegane.cage;
		if(typeof savegane.overexchange !== "undefined") overexchange = savegane.overexchange;
	}
}