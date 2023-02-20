import React from "react";
import { ReactSVG } from "react-svg";

import { Container, Content, Title, SearchInput, SearchSelect, SearchButton } from "./style";

export const Header = () => {
    return (
        <Container>
            <Title>
                <h3>FIND YOUR BLOCK</h3>
                <h1>Encontre os <strong>melhores blocos</strong> de carnaval de 2023</h1>                
            </Title>
            <Content>
                <SearchInput className="search">
                        <ReactSVG className="icon" src="../../../public/search.svg" />
                        <input type="text" placeholder="Digite o nome do bloco" />                    
                </SearchInput>

                <SearchSelect className="search">
                    <ReactSVG className="icon" src="../../../public/location.svg" />
                    <select id="select">
                        <option value="">Selecione uma cidade</option>
                        <option value="São paulo">São Paulo</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="Curitiba">Curitiba</option>
                        <option value="Florianópolis">Florianópolis</option>
                        <option value="Porto alegre">Porto Alegre</option>
                        <option value="Salvador">Salvador</option>
                    </select>
                    <ReactSVG className="icon" src="../../../public/chevron-down.svg" />
                </SearchSelect>
                
                <SearchButton type="submit">BUSCAR AGORA</SearchButton>
            </Content>
        </Container>
    );
};
