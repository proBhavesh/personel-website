import React from "react";
import Image from "components/image";
import { Link } from "components/link";
import { Box, Container, Grid, Button, Input, Heading, Text } from "theme-ui";
import TelegramImg from "assets/telegram.svg";

const ChatWidgets = () => {
	return (
		<>
			<Link path="https://t.me/probhavesh">
				<a href="https://t.me/probhavesh" target="_blank">
					<Box sx={styles.image}>
						<Image src={TelegramImg} />
					</Box>
				</a>
			</Link>
		</>
	);
};

export default ChatWidgets;

const styles = {
	image: {
		img: {
			width: "60px",
			height: "auto",
			position: "fixed",
			right: "1.6rem",
			bottom: "7rem",
			zIndex:"10"
		},
	},
};
