<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen w-full">
	<main class="grow flex flex-col">
		{@render children()}
	</main>
</div>
