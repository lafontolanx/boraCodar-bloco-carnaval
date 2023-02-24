import React from "react";
import { Card } from "../card/card";
import { Container, Title, ButtonSelect, Button, CardContainer } from "./style";

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

            <CardContainer>
                <Card 
                    image={0} 
                    title="O Python do vovô não sobe mais"
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                    city="São Paulo - SP"
                />

                <Card 
                    image={1} 
                    title="Todo mundo null"
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                    city="Florianópolis - SC"
                />

                <Card 
                    image={2} 
                    title="Hoje dou exception"
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                    city="Curitiba - PR"
                />

                <Card 
                    image={3} 
                    title="Manda Node"
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                    city="Salvador - BA"
                />

                <Card 
                    image={4} 
                    title="Só no back-end"
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                    city="São Paulo - SP"
                />

                <Card 
                    image={5} 
                    title="Esse anel não é de Ruby"
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                    city="São Paulo - SP"
                />

                <Card 
                    image={6} 
                    title="Pimenta no C# dos outros é refresco"
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                    city="Rio de Janeiro - RJ"
                />

                <Card 
                    image={7} 
                    title="EnCACHE aquis"
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                    city="Porto Alegre - RS"
                />

                <Card 
                    image={8} 
                    title="Não valho nada mas JAVA li"
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                    city="São Paulo - SP"
                />
            </CardContainer>
        </Container>
    )
}