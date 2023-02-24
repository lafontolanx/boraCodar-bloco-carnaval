import React from "react";
import { ReactSVG } from "react-svg";
import { CSSProperties } from "styled-components";

import { Container, Content, Location } from "./style";

const Images = [
    "https://images.unsplash.com/photo-1584477712087-69fa7e911b86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80",
    "https://images.unsplash.com/photo-1551972873-b7e8754e8e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    "https://images.unsplash.com/photo-1588172561695-a9eed1db3441?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    "https://images.unsplash.com/photo-1522008629172-0c17aa47d1ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1593800026667-ddee5cf4aba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1588172322752-e13df881e89e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
    "https://images.unsplash.com/photo-1593800026666-77f9dd4f6a9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    "https://images.unsplash.com/photo-1551883040-0663d772e9fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
]

interface CardProps {
    image: number,
    title: string,
    content: string,
    city: string
}

export const Card = ({image, title, content, city}: CardProps) => {
    let imageCard = Images[image];
    const bgImage = { backgroundImage: `url(${imageCard})` } as CSSProperties;
    return (
        <Container style={bgImage}>
            <Content>
                <h1>{title}</h1>
                <h4>{content}</h4>
                <Location>
                    <ReactSVG src="../../public/location.svg" />
                    <p>{city}</p>
                </Location>
            </Content>
        </Container>
    )
}