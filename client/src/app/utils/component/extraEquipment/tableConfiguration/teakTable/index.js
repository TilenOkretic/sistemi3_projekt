import { hideElement, hideElementList, showElement } from '../../../../../../sketchfab_webpack_engine/dictionary/model';
import { clearSelection } from '../../../../../../sketchfab_webpack_engine/utils/selection';
import { getHasDeckTable } from '../../../../../config/getters/extraEquipment';
import { setHasDeckTable } from '../../../../../config/setters/extraEquipment';
import { getRegexForDeckTable } from '../../../../../regexLib/extraEquipment/tableConfiguration/deckTable';
import { getRegexForDeckTableLoungeLayout } from '../../../../../regexLib/extraEquipment/tableConfiguration/deckTableLoungeLayout';
import { getRegexForTableCushioning } from '../../../../../regexLib/upholstery/tableConfiguration/loungeLayout';

export let loadNormalDeckTable = async (api) => {
    
    if(!getHasDeckTable(api)){ 
        showElement(getRegexForDeckTable(), api);
        hideElement(getRegexForDeckTableLoungeLayout(), api);
        hideElementList([
            getRegexForTableCushioning('inner', api),
            getRegexForTableCushioning('outer', api),
        ], api);
    } else {
        hideElement(getRegexForDeckTable(), api);
    }
    setHasDeckTable(!getHasDeckTable(api), api);
    clearSelection('extra-tableconfiguration-loungeLayout', true);
    !getHasDeckTable(api) ? clearSelection('extra-tableconfiguration-normal', true) : '';
};
