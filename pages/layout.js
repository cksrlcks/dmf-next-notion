import Nav from "../components/nav";
import styled from "styled-components";
import { Noto_Sans_KR } from "@next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function RootLayout({ children }) {
    return (
        <LayoutBlock>
            <div className="app-nav">
                <Nav />
            </div>
            <div className="app-container">{children}</div>
        </LayoutBlock>
    );
}

const LayoutBlock = styled.div`
    height: 100%;
    .app-nav {
        position: fixed;
        left: 0;
        top: 0;
        width: 8rem;
        height: 100%;
        background: #fff;
        border-right: 1px solid #eee;
    }
    .app-container {
        margin-left: 8rem;
        background: #f8f9fa;
        height: 100%;
        padding: 2rem;
    }
`;
