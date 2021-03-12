<div class="bg-gray-200">
    <div class="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-8 sm:space-y-12">
            <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">The Team</h2>
                <p class="text-xl leading-7 text-gray-500">Risus velit condimentum vitae tincidunt tincidunt. Mauris ridiculus fusce amet urna nunc. Ut nisl ornare diam in.</p>
            </div>
            <ul class="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
                {#each teamMember as { name, job, image }}
                    <li>
                        <div class="space-y-4 mb-6">
                            <img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24 object-cover" src="{image}" alt="{name}">
                            <div class="space-y-2">
                                <div class="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
                                    <h4>{name}</h4>
                                    <p class="text-blue-triarc">{job}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<script>
    let teamMember = [
          { name: 'Serge Müller', job: 'CEO / Partner', image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/02/serge.jpg?w=311&ssl=1'},
          { name: 'Marco Schmidlin', job: 'CTO / Partner', image: 'https://i1.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1275.jpeg?w=311&ssl=1'},
          { name: 'Elke Engel', job: 'CFO / Partner', image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/elke-1.jpg?w=541&ssl=1'},
          { name: 'Max Lüthi', job: 'Software Developer', image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1276.jpeg?w=311&ssl=1'},
          { name: 'Pascal Bertschi', job: 'Software Developer', image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/pascal.jpg?w=311&ssl=1'},
          { name: 'Fabrizio Lazaretti', job: 'Software Developer', image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1'},
          { name: 'Mathia Ninivaggi', job: 'Software Developer', image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1'},
          { name: 'Warwara Panyushkina', job: 'Software Developer', image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1'},
          { name: 'Andrea Honegger', job: 'Software Developer', image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1'},
          { name: 'Paul Tingle', job: 'Nearshore Developer', image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1'},
          { name: 'Dave Haug', job: 'Sales', image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1'},
          { name: 'Andre Urban', job: 'Administration', image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1'},
          { name: 'Sandra Vieira da Silva Lopes', job: 'Facility Manager', image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1'},
          { name: 'Bam Bam', job: 'Quality Assurance', image: 'https://i0.wp.com/triarc-labs.com/wp-content/uploads/2016/01/1281.jpg?w=311&ssl=1'},
    ]
</script>
