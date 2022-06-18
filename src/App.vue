<template>
	<v-app>
		<v-main>
			<router-view />
		</v-main>
		<v-bottom-navigation v-model="value" shift background-color="#fff">
			<v-btn>
				<span>Video</span>

				<v-icon>mdi-television-play</v-icon>
			</v-btn>

			<v-btn>
				<span>Music</span>

				<v-icon>mdi-music-note</v-icon>
			</v-btn>

			<v-btn>
				<span>Book</span>

				<v-icon>mdi-book</v-icon>
			</v-btn>

			<v-btn>
				<span>Image</span>

				<v-icon>mdi-image</v-icon>
			</v-btn>
		</v-bottom-navigation>
	</v-app>
</template>

<script>
export default {
	name: 'App',

	data: () => ({ value: 0 }),
};
</script>
