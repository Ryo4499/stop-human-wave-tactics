import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import Articles from "../components/Articles/Articles";
import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import type { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
	const products = [1, 2, 3]

	return {
		props: {
			products
		},
		revalidate: 4 * 60 * 60
	}
}

export default function App({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div>
			<Header></Header>
			<Grid container>
				<Grid xs={10}>
					<Box>
						<Articles></Articles>
						<Articles></Articles>
						<Articles></Articles>
						<Articles></Articles>
						<Articles></Articles>
						<Articles></Articles>
						<Articles></Articles>
						<Articles></Articles>
						<Articles></Articles>
					</Box>
				</Grid>
				<Grid xs={2}>
					<Sidebar></Sidebar>
				</Grid>
			</Grid>
			<Pagination count={10} color="primary" />
			<Footer></Footer>
		</div>
	);
}
