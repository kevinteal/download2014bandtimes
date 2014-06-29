function createdbFile()
	{
		 db = openDatabase('BandTimes', '1.0', 'BandTimeApp', 2 * 1024 * 1024);
			 db.transaction(function (txs) {
				 txs.executeSql('CREATE TABLE IF NOT EXISTS bands (id UNIQUE, name TEXT, startTime INTEGER, endTime INTEGER, stage TEXT, day INTEGER, playDate INTEGER, fav INTEGER)');
				 txs.executeSql('Select * from bands', [], function(txs, results){
					var len = results.rows.length, i;
					if(len==0)
					{
						//alert(len);
					txs.executeSql('DELETE FROM bands');
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [1,"Rise to Remain", 1300, 1330, "MAIN STAGE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [2,"Architects", 1350, 1420, "MAIN STAGE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [3,"Asking Alexandria", 1440, 1515, "MAIN STAGE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [4,"Papa Roach", 1535, 1620, "MAIN STAGE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [5,"Down", 1645, 1730, "MAIN STAGE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [6,"Korn", 1755, 1855, "MAIN STAGE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [7,"Bullet For My Valentine", 1920, 2020, "MAIN STAGE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [8,"Slipknot", 2100, 2250, "MAIN STAGE", 5, 20130614, 0]);
	
	
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [9,"UFO", 1100, 1140, "MAIN STAGE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [10,"Young Guns", 1210, 1250, "MAIN STAGE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [11,"Buckcherry", 1320, 1400, "MAIN STAGE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [12,"Mastodon", 1430, 1520, "MAIN STAGE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [13,"Alice in Chains", 1550, 1640, "MAIN STAGE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [14,"Motorhead", 1710, 1810, "MAIN STAGE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [15,"Queens of The Stone Age", 1840, 1950, "MAIN STAGE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [16,"Iron Maiden", 2050, 2250, "MAIN STAGE", 6, 20130615, 0]);
	
	
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [17,"Sacred Mother Tongue", 1100, 1130, "MAIN STAGE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [18,"Cancer Bats", 1155, 1225, "MAIN STAGE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [19,"Coal Chamber", 1250, 1330, "MAIN STAGE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [20,"Five Finger Death Punch", 1355, 1435, "MAIN STAGE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [21,"Parkway Drive", 1500, 1545, "MAIN STAGE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [22,"Stone Sour", 1610, 1710, "MAIN STAGE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [23,"The Gaslight Anthem", 1740, 1840, "MAIN STAGE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [24,"Thirty Seconds to Mars", 1910, 2025, "MAIN STAGE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [25,"Rammstein", 2115, 2250, "MAIN STAGE", 0, 20130616, 0]);
	
	
	
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [26,"Dir En Grey", 1300, 1325, "ZIPPO ENCORE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [27,"Skin", 1350, 1420, "ZIPPO ENCORE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [28,"Uriah Heep", 1445, 1525, "ZIPPO ENCORE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [29,"Dragonforce", 1550, 1630, "ZIPPO ENCORE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [30,"Europe", 1655, 1735, "ZIPPO ENCORE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [31,"Volbeat", 1800, 1840, "ZIPPO ENCORE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [32,"3 Doors Down", 1905, 1945, "ZIPPO ENCORE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [33,"Gogol Bordello", 2010, 2055, "ZIPPO ENCORE", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [34,"Black Stone Cherry", 2125, 2235, "ZIPPO ENCORE", 5, 20130614, 0]);
	
	
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [35,"I Divide", 1100, 1125, "ZIPPO ENCORE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [36,"Red White and Blue", 1145, 1210, "ZIPPO ENCORE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [37,"Heavens Basement", 1230, 1255, "ZIPPO ENCORE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [38,"Escape the Fate", 1315, 1340, "ZIPPO ENCORE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [39,"Hardcore Superstar", 1400, 1430, "ZIPPO ENCORE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [40,"Katatonia", 1450, 1520, "ZIPPO ENCORE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [41,"Karnivool", 1540, 1610, "ZIPPO ENCORE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [42,"Lit", 1605, 1700, "ZIPPO ENCORE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [43,"Thunder", 1720, 1800, "ZIPPO ENCORE", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [44,"Jimmy Eat World", 1820, 1905, "ZIPPO ENCORE", 6, 20130615, 0]);
		txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [45,"Enter Shikari", 1935, 2035, "ZIPPO ENCORE", 6, 20130615, 0]);
		
		
		txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [46,"Blitz Kids", 1100, 1125, "ZIPPO ENCORE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [47,"Hellyeah", 1150, 1215, "ZIPPO ENCORE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [48,"The Ghost Inside", 1240, 1305, "ZIPPO ENCORE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [49,"Graveyard", 1330, 1400, "ZIPPO ENCORE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [50,"Masters of Reality", 1425, 1455, "ZIPPO ENCORE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [51,"Amon Amarth", 1520, 1550, "ZIPPO ENCORE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [52,"Rival Sons", 1615, 1645, "ZIPPO ENCORE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [53,"Ghost", 1710, 1750, "ZIPPO ENCORE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [54,"Airbourne", 1815, 1855, "ZIPPO ENCORE", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [55,"A Day to Remember", 1925, 2020, "ZIPPO ENCORE", 0, 20130616, 0]);
		txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [56,"Limp Bizkit", 2050, 2200, "ZIPPO ENCORE", 0, 20130616, 0]);
		
		
		
		txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [57,"Emperor Chung", 1300, 1325, "PEPSI MAX", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [58,"Palm Reader", 1345, 1415, "PEPSI MAX", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [59,"Patent Pending", 1435, 1505, "PEPSI MAX", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [60,"Hang The Bastard", 1525, 1555, "PEPSI MAX", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [61,"The Sword", 1615, 1645, "PEPSI MAX", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [62,"In This Moment", 1705, 1735, "PEPSI MAX", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [63,"Turisas", 1755, 1825, "PEPSI MAX", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [64,"Motionless in White", 1850, 1930, "PEPSI MAX", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [65,"Converge", 1955, 2035, "PEPSI MAX", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [66,"Him", 2100, 2200, "PEPSI MAX", 5, 20130614, 0]);
	
	
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [67,"Broken", 1100, 1120, "PEPSI MAX", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [68,"Hill Valley High", 1140, 1205, "PEPSI MAX", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [69,"Crowns", 1225, 1250, "PEPSI MAX", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [70,"Earthtone9", 1310, 1335, "PEPSI MAX", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [71,"Nekrogoblikon", 1355, 1425, "PEPSI MAX", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [72,"Walking Papers", 1445, 1515, "PEPSI MAX", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [73,"Empress", 1535, 1605, "PEPSI MAX", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [74,"Heart of a Coward", 1625, 1655, "PEPSI MAX", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [75,"Bury Tomorrow", 1715, 1745, "PEPSI MAX", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [76,"Uncle Acid and The Deadbeats", 1805, 1835, "PEPSI MAX", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [77,"Chthonic", 1900, 1940, "PEPSI MAX", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [78,"Kvelertak", 2005, 2045, "PEPSI MAX", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [79,"The Hives", 2110, 2210, "PEPSI MAX", 6, 20130615, 0]);
		
	
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [80,"Gmos", 1100, 1125, "PEPSI MAX", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [81,"States of Panic", 1145, 1210, "PEPSI MAX", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [82,"Krokodil", 1230, 1255, "PEPSI MAX", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [83,"Little Ceasar", 1315, 1340, "PEPSI MAX", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [84,"Brutality Will Prevail", 1400, 1425, "PEPSI MAX", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [85,"Hacktivist", 1445, 1515, "PEPSI MAX", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [86,"Bleed From Within", 1535, 1605, "PEPSI MAX", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [87,"Vision of Disorder", 1625, 1655, "PEPSI MAX", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [88,"Red Fang", 1715, 1745, "PEPSI MAX", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [89,"Newsted", 1805, 1835, "PEPSI MAX", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [90,"POD", 1900, 1940, "PEPSI MAX", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [91,"Modestep", 2005, 2045, "PEPSI MAX", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [92,"Satyricon", 2110, 2210, "PEPSI MAX", 0, 20130616, 0]);
	
	
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [93,"Avosetta", 1415, 1440, "JAGERMEISTER", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [94,"Rob Lynch", 1505, 1530, "JAGERMEISTER", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [95,"James Toseland", 1555, 1620, "JAGERMEISTER", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [96,"Hear Kitty Kitty", 1645, 1710, "JAGERMEISTER", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [97,"Walking Papers", 1735, 1800, "JAGERMEISTER", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [98,"We Are The Ocean", 1825, 1855, "JAGERMEISTER", 5, 20130614, 0]);

	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [99,"The After Party", 1210, 1235, "JAGERMEISTER", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [100,"The Killing Floor", 1300, 1325, "JAGERMEISTER", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [101,"Fahran", 1350, 1415, "JAGERMEISTER", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [102,"Straight Lines", 1440, 1505, "JAGERMEISTER", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [103,"Crowns", 1530, 1555, "JAGERMEISTER", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [104,"Buffalo Summer", 1620, 1645, "JAGERMEISTER", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [105,"Acoustic TV", 1710, 1735, "JAGERMEISTER", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [106,"Devin Townsend", 1800, 1830, "JAGERMEISTER", 6, 20130615, 0]);
	
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [107,"Arthemis", 1210, 1235, "JAGERMEISTER", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [108,"The Graveltones", 1300, 1325, "JAGERMEISTER", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [109,"Night X Night", 1350, 1415, "JAGERMEISTER", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [110,"Red White and Blue", 1440, 1505, "JAGERMEISTER", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [111,"Skin", 1530, 1555, "JAGERMEISTER", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [112,"Crash Mansion", 1620, 1645, "JAGERMEISTER", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [113,"Pig Iron", 1710, 1735, "JAGERMEISTER", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [114,"Heavens Basement", 1800, 1830, "JAGERMEISTER", 0, 20130616, 0]);
	
	
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [115,"Hammer of The Gods", 1300, 1325, "RED BULL", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [116,"Free Fall", 1345, 1410, "RED BULL", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [117,"Page 44", 1600, 1625, "RED BULL", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [118,"Verses", 1645, 1710, "RED BULL", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [119,"Hoax", 1730, 1755, "RED BULL", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [120,"Blood Command", 1815, 1840, "RED BULL", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [121,"Zico Chain", 1900, 1925, "RED BULL", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [122,"The Algorithm", 1950, 2015, "RED BULL", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [123,"Fidlar", 2040, 2110, "RED BULL", 5, 20130614, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [124,"Vampire Killers", 2140, 2210, "RED BULL", 5, 20130614, 0]);
	
	
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [125,"Cytota", 1210, 1235, "RED BULL", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [126,"The Wild Lies", 1300, 1325, "RED BULL", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [127,"Idiom", 1350, 1415, "RED BULL", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [128,"Astroid Boys", 1440, 1505, "RED BULL", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [129,"Black Moth", 1530, 1555, "RED BULL", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [130,"Silent Screams", 1620, 1645, "RED BULL", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [131,"Wounds", 1710, 1735, "RED BULL", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [132,"Voodoo Six", 1800, 1830, "RED BULL", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [133,"Lonely The Brave", 1955, 2025, "RED BULL", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [134,"Rat Attack", 2055, 2125, "RED BULL", 6, 20130615, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [135,"Last Witness", 2155, 2225, "RED BULL", 6, 20130615, 0]);
	
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [136,"Naked Flame", 1210, 1235, "RED BULL", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [137,"The First", 1300, 1325, "RED BULL", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [138,"Mordecai", 1350, 1415, "RED BULL", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [139,"Black Dogs", 1440, 1505, "RED BULL", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [140,"Huntress", 1530, 1555, "RED BULL", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [141,"Buffalo Summer", 1620, 1645, "RED BULL", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [142,"Radkey", 1710, 1735, "RED BULL", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [143,"The Howling", 1800, 1830, "RED BULL", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [144,"I Am I", 1955, 2025, "RED BULL", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [145,"Glamour of The Kill", 2055, 2125, "RED BULL", 0, 20130616, 0]);
	txs.executeSql('INSERT INTO bands (id, name, startTime, endTime, stage, day, playDate, fav) VALUES (?,?,?,?,?,?,?,?)', [146,"Sonic Boom Six", 2155, 2225, "RED BULL", 0, 20130616, 0]);
					
					}else{
						//table has results use them
						//this will keep wish list items
					}
			 });
					});
					
					SetUpControls("MAIN STAGE");
					
	}
	
	
	
	function SetUpControls(StageName)
	{
		
		var fulldate = getFulldate();
		var time = getFulltime();
		
		fulldate=20130616; 
		if (fulldate == 20130614 || fulldate == 20130615 || fulldate == 20130616 )
		{
			//alert("day: " + fulldate);
			//get the bands which match fulldate with play date 
			$("#stageName").text(StageName);
			$("#bandNow,#bandNext,#nowStart,#nowEnd,#nextStart,#nextEnd").css("font-size", 18);
			
			 db.transaction(function (txs) {
						txs.executeSql('select * from bands where playDate = '+fulldate+' and startTime < '+time+' and endTime > '+time+' and stage="'+StageName+'"', [], function(txs, results){
							var len = results.rows.length, i;
							for(i=0;i<len;i++)
								{			
									var BandRecord = results.rows.item(i);
									$("#bandNow").text(BandRecord.name);
									$("#nowStart").text(BandRecord.startTime);
									$("#nowEnd").text(BandRecord.endTime);
									
								}
								if(len==0)
								{
									$("#bandNow").text("No Band Playing");
									$("#nowStart").text("");
									$("#nowEnd").text("");
								}
						});
						txs.executeSql('select * from bands where playDate = '+fulldate+' and startTime > '+time+' and stage="'+StageName+'" order by startTime ASC limit 1', [], function(txs, results){
							var len = results.rows.length, i;
							for(i=0;i<len;i++)
								{			
								
									var BandRecord = results.rows.item(i);
									//alert(BandRecord.name +" "+len);
									$("#bandNext").text(BandRecord.name);
									$("#nextStart").text(BandRecord.startTime);
									$("#nextEnd").text(BandRecord.endTime);
								}
								if(len==0)
								{
									$("#bandNext").text("No Band Playing");
									$("#nextStart").text("");
									$("#nextEnd").text("");
								}
						});
						
			 });
		}else{
			//alert("not time yet");
			$("#nowplaying").css("display", "none");
			$("#controls").css("display", "none");
		}
		
	}
	
	function getFulldate()
	{
		var d = new Date();
		//month plus one - starts at 0 plus if lenght 1 add 0 to start
		//day=date,year=fullyear
		var year = d.getFullYear();
		var month = d.getMonth();
		month++;
		month = month < 10 ? '0'+month : month;
		var day = d.getDate();
		var fulldate = year+''+month+''+day;
		return fulldate;
	}
	function getFulltime()
	{
		var d = new Date();
		var hour = d.getHours();
		var minute = d.getMinutes();
		minute = minute < 10 ? '0'+minute : minute;
		var time = hour+''+minute;
		return time;
	}
	function nextStage(){
		
		var move = new Boolean(true);
		var currentStage = $("#stageName").text();
		switch(currentStage)
		{
			case "MAIN STAGE":
			$("#stageName").text("ZIPPO ENCORE");
			SetUpControls("ZIPPO ENCORE");
			break;
			
			case "ZIPPO ENCORE":
			$("#stageName").text("PEPSI MAX");
			SetUpControls("PEPSI MAX");
			break;
			
			case "PEPSI MAX":
			$("#stageName").text("JAGERMEISTER");
			SetUpControls("JAGERMEISTER");
			break;
			
			case "JAGERMEISTER":
			$("#stageName").text("RED BULL");
			SetUpControls("RED BULL");
			break;
			
			case "RED BULL":
			move=false;
			//alert("none");
			break;
		}
		if(move==true){
		//animateMe("left");
		}
	}
	function preStage(){
		var move = new Boolean(true);
		var currentStage = $("#stageName").text();
		switch(currentStage)
		{
			case "MAIN STAGE":
			//alert("NONE");
			move=false;
			break;
			
			case "ZIPPO ENCORE":
			$("#stageName").text("MAIN STAGE");
			SetUpControls("MAIN STAGE");
			break;
			
			case "PEPSI MAX":
			$("#stageName").text("ZIPPO ENCORE");
			SetUpControls("ZIPPO ENCORE");
			break;
			
			case "JAGERMEISTER":
			$("#stageName").text("PEPSI MAX");
			SetUpControls("PEPSI MAX");
			break;
			
			case "RED BULL":
			$("#stageName").text("JAGERMEISTER");
			SetUpControls("JAGERMEISTER");
			break;
		}	
		if(move==true){
		//animateMe("right");	
		}
		
	}
	
	function animateMe(direction){
		
		if(direction=="right")
		{
		$("#nowplaying").animate({left:'350px'},300,function(){
			$("#nowplaying").css("left", "-300px");
			$("#nowplaying").animate({left:'0px'});
			}
			);
		}else if (direction == "left")
		{
			$("#nowplaying").animate({left:'-350px'},300,function(){
			$("#nowplaying").css("left", "300px");
			$("#nowplaying").animate({left:'0px'});
			}
			);
		}
	}
	
	function MyPlan(){
		//alert("planner");
	}
	function changme(stage){
		$.mobile.changePage("#stages", {
			transition : "slide"
		});
		$("#stageHeading").text(stage);
		getStageBands(stage);
			gday=5;
			$("#friday").buttonMarkup({theme: 'b'});
			$("#saturday").buttonMarkup({theme: 'c'});
			$("#sunday").buttonMarkup({theme: 'c'});
			event.preventDefault();
		return false;
	}
	function showStage(stage){
		$("#stageHeading").text(stage);
		$("#stagepanel").panel("close");
		getStageBands(stage);
	}
	function getStageBands(stage){
		//alert("get data for this stage "+stage+" on day "+gday);
		//get bands for stage where gDay = day
		/*$("#bandholder").animate({opacity: 0},200,function(){
			
			$("#bandholder").animate({opacity:0.9},200);
			*/
			document.getElementById("bandholder").innerHTML="";
			
			
			 db.transaction(function (txs) {
						txs.executeSql('select * from bands where stage="'+stage+'" and day='+gday+' order by startTime DESC', [], function(txs, results){
									var len = results.rows.length, i;
									for(i=0;i<len;i++)
										{
											var BandRecord = results.rows.item(i);
																						
											document.getElementById("bandholder").innerHTML+="<div class='bandslot mytext'>"+BandRecord.name+"<br/>"+BandRecord.startTime+" - "+BandRecord.endTime+"<br/><a class='stars' href='#' data-role='button' data-icon='star' data-iconpos='notext' data-theme='c' data-inline='true'>"+BandRecord.id+"</a></div>";
											
											if(BandRecord.fav==1)
											{
												$("#bandholder .bandslot:last").addClass("fav");
												//$("#bandholder .bandslot:last").css("background", "#FF9");
												$("#bandholder .stars:last").buttonMarkup({icon: "delete"});
											}
											
																				
										}
										document.getElementById("bandholder").innerHTML+="<div id='ending'><center>"+BandRecord.stage+"</center></div>";
										$("#bandholder").trigger('create');
										var x = 120*i;
										$("#bandholder").css("height", x+"px");
										//alert(document.getElementById("bandholder").style.height);
										//$('#stages').trigger('pagecreate');
							});
				//	});
		});
		
		
		
	}
	function addToFav(id){
		//alert("adding");
		
		var addid = Number(id);
		//alert(addid);
		db.transaction(function (txs) {
				txs.executeSql('UPDATE bands SET fav=1 WHERE id='+addid+'');
		});
	}
	function removeFav(id){
		//alert("adding");
		
		var addid = Number(id);
		//alert(addid);
		db.transaction(function (txs) {
				txs.executeSql('UPDATE bands SET fav=0 WHERE id='+addid+'');
		});
	}
	function gotoDay(){
		$.mobile.changePage("#planDay", {
			transition : "slide"
		});
		$("#dayHeading").text("FRIDAY");
		getFavBands("FRIDAY");
		event.preventDefault();
		return false;
	}
	function getPlanBands(day){
		$("#dayHeading").text(day);
		$("#daypanel").panel("close");
		getFavBands(day);
	}
	
	function getFavBands(day){
		var daynum = 5;
		if(day=="FRIDAY"){daynum = 5;}
		if(day=="SATURDAY"){daynum = 6;}
		if(day=="SUNDAY"){daynum = 0;}
		
		document.getElementById("favbandholder").innerHTML="";
		
		 db.transaction(function (txs) {
						txs.executeSql('select * from bands where fav=1 and day='+daynum+' order by startTime ASC', [], function(txs, results){
									var len = results.rows.length, i;
									
									var preEnd = 0;
									var preBand = "";
									var clash = new Boolean(false);
									
									for(i=0;i<len;i++)
										{
											var BandRecord = results.rows.item(i);
											
											if(i>0)
											{
												if(preEnd>BandRecord.startTime)
												{
													$("#favbandholder .favslot:last").addClass("clash");
													$("#favbandholder .favslot:last").append("<br/><span class='smalltext'><a href='#' data-mini='true' data-role='button' data-icon='alert' data-iconpos='notext' data-theme='c' data-inline='true'></a>Clash with "+BandRecord.name+"</span>");
													clash=true;
												}
											}
											preEnd = BandRecord.endTime;
											
																						
											document.getElementById("favbandholder").innerHTML+="<div class='favslot mytext'>"+BandRecord.name+"<a class='delfav' href='#' data-role='button' data-icon='delete' data-iconpos='notext' data-theme='c' data-inline='true'>"+BandRecord.id+"</a><br/>"+BandRecord.startTime+" - "+BandRecord.endTime+"<br/>"+BandRecord.stage+"</div>";
																						
												if(clash==true)
												{
													$("#favbandholder .favslot:last").addClass("clash");
													$("#favbandholder .favslot:last").append("<br/><span class='smalltext'><a href='#' data-mini='true' data-role='button' data-icon='alert' data-iconpos='notext' data-theme='c' data-inline='true'></a>Clash with "+preBand+"</span>");
													clash=false;
												}
												preBand = BandRecord.name;	
																				
										}
										$("#favbandholder").trigger('create');
										var x = 160*i;
										$("#favbandholder").css("height", x+"px");
										//alert(document.getElementById("favbandholder").style.height);
										//$('#planDay').trigger('pagecreate');
							});
					});
		
		
	}