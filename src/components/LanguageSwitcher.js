import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
const Container = styled.div`
  display:inline-block;
`;

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const onselect = React.useCallback((event)=>{
        const options = event.target.options;
        const selectedLan = options[options.selectedIndex].value;
        i18n.changeLanguage(selectedLan);
    });
    return (
        <>
            <Container data-testid="lang-container" >
                {/* <label aria-label="language-switcher"> */}
                    <select  
                        area-role="language"
                        onChange={onselect} >
                        <option value="en" >en</option>
                        <option value="sp" >sp</option>
                    </select>
                {/* </label> */}
            </Container>
        </>
    )
}
export default React.memo(LanguageSwitcher);

