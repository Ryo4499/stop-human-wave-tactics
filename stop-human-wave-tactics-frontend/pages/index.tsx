import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import Articles from "../components/Articles/Articles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import type { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
	const products = [1, 2, 3];

	return {
		props: {
			products,
		},
		revalidate: 4 * 60 * 60,
	};
}

export default function App({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Grid container direction="column">
			<Grid container justifyContent="center" direction="row">
				<Header></Header>
			</Grid>
			<Grid container direction="row">
				<Grid container justifyContent="center" direction="column" xs={9} md={10} px={10}>
					<Box>
						<Articles></Articles>
					</Box>
					<Box sx={{ justifyContent: "center" }}>
						<Pagination count={10} color="primary" />
					</Box>
				</Grid>
				<Grid container justifyContent="center" direction="column" xs={3} md={2}>
					<Sidebar></Sidebar>
				</Grid>
			</Grid>
			<Grid container justifyContent="center">
				<Footer></Footer>
			</Grid>
		</Grid >
	);
}
