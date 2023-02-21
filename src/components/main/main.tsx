import React from "react";
import { Card } from "../card/card";
import { Container, Title, ButtonSelect, Button } from "./style";

export const Main = () => {
    return (
        <Container>
            <Title>
                <h1>Blocos recomendados</h1>

                <ButtonSelect>
                    <Button className="lista">LISTA</Button>
                    <Button className="mapa">MAPA</Button>
                </ButtonSelect>
            </Title>
            <Card />
        </Container>
    )
}