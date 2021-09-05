import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const onselect = React.useCallback((event)=>{
        const options = event.target.options;
        const selectedLan = options[options.selectedIndex].value;
        i18n.changeLanguage(selectedLan);
    });
    return (
        <>
            <select name="language-switcher" onChange={onselect} >
                <option value="en" >en</option>
                <option value="sp" >sp</option>
            </select>
        </>
    )
}
export default React.memo(LanguageSwitcher);

