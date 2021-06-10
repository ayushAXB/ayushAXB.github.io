

// fuction for index page how it works section
function showData(boxLi) {
    const box = document.getElementsByClassName('box');
    for (i = 0; i < box.length; i++) {
        if (box[i].classList.contains(boxLi)) {
            box[i].classList.replace('boxUnSelected', 'boxSelected');
            box[i].nextElementSibling.classList.replace('boxContent', 'boxContentDisplay');
        }
        else {
            box[i].classList.replace('boxSelected', 'boxUnSelected')
            box[i].nextElementSibling.classList.replace('boxContentDisplay', 'boxContent');
        }
    }
}

// function for index page world class expert doctor section
function switchGrid(divSet) {
    const doc = document.getElementsByClassName('doc-divInner')
    const e = divSet.split("-")[1];
    for (i = 0; i < doc.length; i++) {
        if (i == e) {
            doc[i].classList.replace('docSetNoDisplay', 'docSet');
        }
        else {
            doc[i].classList.replace('docSet', 'docSetNoDisplay');
        }
    }
}

// function for index page featured medical treament section
function switchGridTreament(divSet) {
    const treat = document.getElementsByClassName('treamentImgsInner');
    const e = divSet.split("-")[1];
    for (i = 0; i < treat.length; i++) {
        if (i == e) {
            treat[i].classList.replace('treatSetNoDisplay', 'treatSet');
        }
        else {
            treat[i].classList.replace('treatSet', 'treatSetNoDisplay');
        }
    }
}

// function for about-hospital, doctors-profile and tvastraPlus page question section
function showHide(uD) {
    const e = uD.split("-")[1]
    const ud = document.getElementsByClassName(uD)
    const close = ud[0].children[0]
    const open = ud[0].children[1];
    const para = document.querySelectorAll('.items p');
    const p = para[e]

    if (close.hasAttribute("style")) {
        close.removeAttribute('style');
        open.setAttribute('style', 'display:none');
        p.classList.remove('subParaNoDisplay')
    }
    else {
        open.removeAttribute('style');
        close.setAttribute('style', 'display:none');
        p.classList.add('subParaNoDisplay')
    }
}


// function for faq page question section
function faqShowHide(uD) {
    const e = uD.split("-")[1]
    const ud = document.getElementsByClassName(uD)
    const close = ud[0].children[0]
    const open = ud[0].children[1];
    const para = document.querySelectorAll('.faqItems p');
    const head = document.querySelectorAll('.subHeadInner h5');
    const p = para[e]
    const h = head[e]

    if (close.hasAttribute("style")) {
        close.removeAttribute('style');
        open.setAttribute('style', 'display:none');
        p.classList.remove('subParaNoDisplay')
        h.setAttribute('style', 'color:var(--darkBlue)')
    }
    else {
        open.removeAttribute('style');
        close.setAttribute('style', 'display:none');
        p.classList.add('subParaNoDisplay');
        h.removeAttribute('style');
    }
}


// function for tvastra plus test section
function tPlusTest(set) {
    const sets = document.getElementsByClassName('testSecInner');
    for (i = 0; i < sets.length; i++) {
        if (sets[i].classList.contains(set)) {
            sets[i].classList.replace('testsNoDisplay', 'tests');
        }
        else {
            sets[i].classList.replace('tests', 'testsNoDisplay');
        }
    }
}


// function for treament page, more service section
function moreServiceTreatment(set) {
    const sets = document.getElementsByClassName('moreServiceImg');
    for (i = 0; i < sets.length; i++) {
        if (sets[i].classList.contains(set)) {
            sets[i].classList.replace('imgSectionNoDisplay', 'imgSection');
        }
        else {
            sets[i].classList.replace('imgSection', 'imgSectionNoDisplay');
        }
    }
}
