import "../styles/globals.css"
import Header from "../components/common/Header";
import Fotter from "../components/common/Footer";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={darkTheme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
