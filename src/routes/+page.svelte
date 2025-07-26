<script>
    import Fa from 'svelte-fa';
    import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
    import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
</script>

<div id="hero" class="flex flex-col min-h-[90vh] py-4 px-4 md:px-12 lg:px-24 justify-center leading-none">
    <h1 class="text-9xl text-primary pb-4">Hey, I'm Alex.</h1>
    <h2 class="text-6xl pb-4">A Software Engineer from New York.</h2>
    <div class="flex flex-wrap gap-2">
        <Button href="mailto:alex@snit.ski" target="_blank">
            <Fa icon={faEnvelope} scale="2" />
            <p class="font-bold">alex@snit.ski</p>
        </Button>
        <Button href="https://linkedin.com/in/alexander-snit" target="_blank">
            <Fa icon={faLinkedin} scale="2" />
            <p class="font-bold">/in/alexander-snit</p>
        </Button>
        <Button href="https://github.com/snitski" target="_blank">
            <Fa icon={faGithub} scale="2" />
            <p class="font-bold">/snitski</p>
        </Button>
    </div>
</div>

<div class="flex flex-col items-center px-4 md:px-16">
    <Card.Root id="about-me" class="max-w-4xl">
        <Card.Header>
            <Card.Title>
                <h2>About Me</h2>
            </Card.Title>
        </Card.Header>
        <Card.Content class="text-lg">
            I'm Alex, a software engineer at
            <a class="text-primary hover:underline" href="https://naii.com" target=_blank>North Atlantic Industries</a>,
            where I'm involved with modernizing and maintaining our embedded C libraries
            by leveraging modern C standards and the latest of DevOps technology.
            In addition to my work, I'm currently pursuing my master's degree in
            computer science at Stony Brook University with a focus in systems and security.
        </Card.Content>
    </Card.Root>
</div>