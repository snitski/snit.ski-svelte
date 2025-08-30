<script>
    import { goto } from '$app/navigation';
	import { page } from '$app/state';
    import { browser } from '$app/environment';

    let countdown = 3;
    const interval = setInterval(() => {
        countdown--;
        if (countdown === 0) {
            clearInterval(interval);
            if (browser) goto('/');
        }
    }, 1000);
</script>

<div class="flex flex-col items-center justify-center min-h-screen p-4 text-center">
    <h2> {page.status}: {page.error?.message} </h2>
    <p>Whoops, looks like you're lost. Let's take you back home in {countdown}...</p>
</div>
