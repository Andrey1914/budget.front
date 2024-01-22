import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --text: #222260;
        --primary-color2: 'color: rgba(34, 34, 96, .6)';
        --primary-color3: 'color: rgba(34, 34, 96, .4)';
        --green: #42AD00;
        --color-grey: #aaa;
        --red: #F56692;
        --color-delete: #FF0000;
        --bg-header: #4fbaf4;
        --liniar-gradient-dark: #4fbaf4;
        --liniar-gradient-light: #4af2ec;
        --bg-box: #fcf6f9;
        --bg: #f3f9f9;
        --shadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;'
    }

    html[theme-type="light"] {
    overflow-x: hidden;

    --bg: #f3f9f9;
    --bg-header: #005bb6;
    --bg-paper: #efefef;
    --overlay-dark: #cee0ff;
    --overlay-light: #f3f8ff;

    --btn-bg: #005bb6;
    --btn-border: #005bb6;

    --text: #312c4d;

    --border: #6e6d6d;
    --accent-border: #59a5f0;
    --warning: #d44444b6;
    --edit: #d4b244;
    --accent: #9fcbf7;

    --loader: #80bfff;
    --loader-secondary: #005bb6;

    --icon: rgba(0, 0, 0, 0.54);
    /* #117394 */
    /*  */
  }

  html[theme-type="dark"] {
    /* --bg-color: #292929; */
    --bg: #312c4d;
    --bg-header: #1c203d;
    --bg-paper: #474262;
    --overlay-dark: #000f50;
    --overlay-light: #88b6ff;

    --btn-bg: #3c90b8;
    --accent-btn-bg: #53699e;
    --btn-border: #7ebaf5;

    --text: #f3f9f9;

    --border: #acadd2;
    --accent-border: #b5cef5;

    --warning: #d44444b6;
    --edit: #d4b244;
    --accent: #1976d2;

    --loader: #3c90b8;
    --loader-secondary: #04145c;

    --icon: rgba(119, 118, 118, 0.85);
    /* #3c90b8 */
    /* #b5cef5 */
    /* #04145c */
    /* #53699e */
    /* #acadd2 */
    /* #312c4d */
    /* #1976d2 */
  }

    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        /* overflow: hidden; */
        color: rgba(34, 34, 96, .6);
    }

    h1, h2, h3, h4, h5, h6{
        color: var(--text);
    }

    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
`;
