import { createHTMLButton } from '../../../../../../sketchfab_webpack_engine/utils/buttons';
import { domExists } from '../../../../../../sketchfab_webpack_engine/utils/dom';
import { closeHTMLList, openHTMLList } from '../../../../../../sketchfab_webpack_engine/utils/listUtil';
import { setInboardMotorCount } from '../../../../../config/setters/hullAndMotorization';
import { loadMotorHull } from '../../../../hulls/hullUtil';

let openPlaningList = (api) => {
    api.isModelInboard() ? setInboardMotorCount(api.isModel23() ? 1 : 2, api) : '';
    loadMotorHull(api);
    domExists('planing-list') ? openHTMLList('planing-list') : '';
    domExists('displacement-list') ? closeHTMLList('displacement-list') : '';
};

export let createPlaningHullButton = (api) => {
    let btn = createHTMLButton('planing-btn', 'hullPlaning', api);
    btn.addEventListener('click', () => openPlaningList(api));
    return btn;
};
