<script lang="ts">
import Picture from "$lib/index/Picture.svelte";

export interface TeamMember {
    name: string;
    job: string;
    description: string;
    images: File;
    linkedIn: string;
    email: string;
}
export let member: TeamMember;
</script>

<li class="flex flex-col gap-10 pt-12 border-t border-gray-200 md:border-none sm:flex-row">
    <Picture
            alt="{member.name} Photo"
            images={member.images}
            cssClass="aspect-[4/5] w-full sm:w-52 flex-none rounded-2xl object-cover"
    />
    <div class="max-w-xl flex-auto">
        <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-700">{member.name}</h3>
        <p class="text-base leading-7 text-gray-500">{member.job}</p>
        <p class="mt-6 text-base leading-7 text-gray-500">
            Platzhalter
        </p>
        <ul role="list" class="mt-6 flex gap-x-6">
            <li>
                <div class="flex gap-4">
                    <div class="flex-shrink-0 items-start flex w-6 overflow-hidden">
                        <a href={member.linkedIn} target="_blank" rel="noreferrer" aria-label="Linkedin">
                            <svg
                                    class="h-7 'fill-gray-900'"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                            >
                                <path
                                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                                /></svg
                            >
                        </a>
                    </div>
                    <div class="flex-shrink-0 items-start flex w-6">
                    <a href="mailto:{member.email}" aria-label="Email">
                        <svg class="h-7"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z"/>
                        </svg>
                    </a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</li>


