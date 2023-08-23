console.log("Prêt à zombifier l'académie!");

browser.runtime.onMessage.addListener((message) => {
  if (message.action === "zombify") {
    replace();
    // Other actions you want to perform on the page
  }
});

function replace() {

	replaceBanner();
	replaceHead();
	replaceHeader();
	replaceBackground();

	var gallery = document.getElementById("block-system-main");
	if (!gallery) {
		console.error("Gallery not found");
		return;
	}

	let filenames = [
		"Season_five_zombie_(2)_26.jpg",
		"3A_Walker_5_02.jpg",
		"3A_Walker_14_03.jpg",
		"04_walker_2_04.jpg",
		"04_walker_3_05.jpg",
		"04_walker_5_06.jpg",
		"4X03Walker_TWDFbpage_07.jpg",
		"811_swamp_Walker_2_08.jpg",
		"946267_705453669480794_39343456_n_09.jpg",
		"AMC_506_Bisected_Walker_10.jpg",
		"AMC_511_Forest_Walker_2_11.jpg",
		"AMC_513_Field_Walkers_12.jpg",
		"AMC_515_Woods_Walker_13.jpg",
		"AMC_516_Noose_Walker_14.jpg",
		"AMC_516_Wolves_Walker_15.jpg",
		"Caption-Photo-Burned_01.jpg",
		"download (1)_16.jpg",
		"download_17.jpg",
		"images (1)_18.jpg",
		"images (2)_19.jpg",
		"images_20.jpg",
		"IMG_0592-RT-GN-1_21.jpg",
		"Infected6_22.jpg",
		"Old_walker_travis_24.jpg",
		"Proxydddd_25.jpg",
		"Season_five_zombie.jpg",
		"SoldadoWalkertanque_2.jpg",
		"ThCAAC21UB_29.jpg",
		"The-walking-dead_3x16_finale_2_30.jpg",
		"TWD_801_GP_0509_0234-RT-GN_31.jpg",
		"TWD_GP_304_0615_0258_32.jpg",
		"Vlcsnap-2013-09-16-21h28m44s149_33.jpg",
		"WalkerAtlanta_34.jpg",
		"Walkercampdeer_35.jpg",
		"Walking-dead-zombie_36.jpg",
		"What_Lies_Ahead_Zombie,_2_37.jpg",
		"ZOM1_38.jpg",
		];
		

  for (let i = filenames.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filenames[i], filenames[j]] = [filenames[j], filenames[i]];
  }

  let imgs = gallery.getElementsByTagName("img");
  let imgIndex = 0; // Keep track of the current image index
  for (imgElt of imgs) {
    if (imgIndex >= filenames.length) {
      // If we've used all available filenames, reset the index
      imgIndex = 0;
    }

    let file = "images/" + filenames[imgIndex];
    let url_2 = browser.extension.getURL(file);
    imgElt.src = url_2;
    console.log(url_2);

    imgIndex++;
  }
	}

function replaceBanner() {
  const banner = document.querySelector("#block-academie-academie-banner");
  if (!banner) {
    console.error("Banner not found");
    return;
  	}
  const bannerImg = banner.querySelector("img"); // Use querySelector instead of getElementByTag
  if (!bannerImg) {
  	console.error("Banner image not found");
  	return;
  	}
  let url_1 = browser.extension.getURL("images/zombieattack2.jpg");
  bannerImg.src = url_1;
  console.log(url_1);
}

function replaceHead() {
	document.querySelector("h1").textContent = "Les quarante aujourd'hui : 35 membres (plus ou moins)";
}

function replaceHeader() {
	var bgElement = document.querySelector("body");
	var bgUrl = browser.extension.getURL("images/header_image.jpg");
	bgElement.style.background = `transparent url('${bgUrl}') no-repeat center top`;	
}

function replaceBackground() {
	var page = document.querySelector("body");
	page.style.backgroundColor = "#656c72";
}
