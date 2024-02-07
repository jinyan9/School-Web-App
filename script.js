
$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#f987a2', '#f987a2', '#1bbc9b'],
        navigation: true,
        navigationPosition: 'right',
        anchors: ['section1', 'section2', 'section3'],
        menu: '#menu',
        scrollingSpeed: 1000,
        responsiveWidth: 768,
    });
});


$(document).ready(function () {
    const cardData = [
        {
            title: 'Sailor Moon',
            author: 'Naoko Takeuchi',
            genre: 'Fantasy',
            image: 'images/sm.jpg',
            content: 'Sailor Moon is a Japanese shōjo manga series written and illustrated by Naoko Takeuchi. It was originally serialized in Nakayoshi from 1991 to 1997; the 60 individual chapters were published in 18 tankōbon volumes. The series follows the adventures of a schoolgirl named Usagi Tsukino as she transforms into Sailor Moon to search for a magical artifact, the "Legendary Silver Crystal". She leads a group of comrades, the Sailor Soldiers as they battle against villains to prevent the theft of the Silver Crystal and the destruction of the Solar System.'
        },
        {
            title: 'Youve Reached Sam',
            author: 'Dustin Thao',
            genre: 'Romance',
            image: 'images/sam.jpg',
            content: 'A heartfelt novel about love and loss and what it means to say goodbye. How do you move forward when everything you love in on the line?'
        },
        {
            title: 'Hamlet',
            author: 'William Shakespeare',
            genre: 'Bio and Memoirs',
            image: 'images/hamlet.jpeg',
            content: 'Hamlet, another brilliant work by Shakespeare, revolves around the internal struggles of the young Prince Hamlet as he seeks revenge for his father’s murder. The play is renowned for its exploration of existential themes, political intrigue, and the complexities of the human psyche.'
        },
        {
            title: 'Five Have Plenty of Fun',
            author: 'Enid Blyton',
            genre: 'Mystery',
            image: 'images/five.jpg',
            content: 'Join the Famous Five on another thrilling adventure as Julian, Dick, Anne, George, and their loyal dog Timmy uncover mysteries and solve puzzles. Written by Enid Blyton, this installment in the Famous Five series is filled with suspense, camaraderie, and plenty of fun.'
        },
        {
            title: "Five Nights at Freddy's Graphic Novel #1",
            author: 'Scott Cawthon',
            genre: 'Science Fiction',
            image: 'images/fnaf.jpeg',
            content: "A decade after the unsettling murders at Freddy Fazbear's Pizza tore apart their community, Charlie, the daughter of the restaurant's owner, reunites with her childhood friends on the tragic anniversary. As they venture into the long-abandoned pizza place, locked up for years, they uncover a chilling revelation: the once friendly, adult-sized animatronic mascots that entertained visitors now harbor a sinister secret and a deadly agenda."
        },
        {
            title: 'Close Enough to Hurt: A Novel',
            author: 'Katherine A. Olson',
            genre: 'Thriller',
            image: 'images/hurt.png',
            description: 'Dive into this gripping debut where revenge merges with the essence of "Promising Young Woman," unveiling a vigilant mission against predatory men. A captivating read for enthusiasts of Jeneva Rose and Layne Fargo.'
        },
        {
            title: "I'm Glad My Mom Died ",
            author: 'Jennette McCurdy',
            genre: 'Bio and Memoir',
            image: 'images/mom.jpeg',
            content: 'A heartbreaking and hilarious memoir by iCarly and Sam & Cat star Jennette McCurdy about her struggles as a former child actor—including eating disorders, addiction, and a complicated relationship with her overbearing mother—and how she retook control of her life.'
        },

        {
            title: 'The Pages of Time: A Time Travel Thriller Kindle Edition',
            author: 'Damian Knight',
            genre: 'Thriller',
            image: 'images/time.jpg',
            content: 'With the clock ticking and danger lurking at every turn, can he save his family from violent deaths that are already in the past, thwart the sinister forces that wish to use him for their own ends, and maybe also win the girl he loves, by rewriting the pages of time?'
        },
        {
            title: 'A spelltacular Ever After High Year',
            author: 'Edda Usa',
            genre: 'Fantasy',
            image: 'images/eah.jpg',
            content: 'Based on Mattel\'s Ever After High, this inventive yearbook invites fans to walk the enchanted school halls of the magical boarding school along with their favorite Royals and Rebels, and discover cool character profiles, highlights from "best moments of the year," class photos, fantastical stories, and much more'
        },
        {
            title: 'Off Centre',
            author: 'Haresh Sharma',
            genre: 'Non-fiction',
            image: 'images/off.jpeg',
            content: 'Off Centre is The Necessary Stages landmark play in the history of Singapore Theatre. It is best remembered for bringing mental illness and its patients’ plight to the attention of the media and the public. Haresh Shama ,off centre , non fiction'
        },
        {
            title: "The Busy Body",
            author: "Kemper Donovan",
            genre: "Mystery",
            image: 'images/busy.jpg',
            content: "It's a dream assignment. Former Senator Dorothy Gibson, aka that woman, is the most talked-about person in the country right now, though largely for the wrong reasons. As an independent candidate for President of the United States, Dorothy split the vote and is being blamed for the shocking result. After her very public defeat, she's retreated to her home in rural Maine, inviting her ghostwriter to join her."
        },
        {
            title: "Rainbow Magic: Ruby the Red Fairy",
            author: "Daisy Meadows",
            genre: "Fiction",
            image: 'images/ruby.jpg',
            content: "When Rachel and Kirsty meet on the ferry to Rainspell Island one summer holiday, they have no idea that such incredible adventures with the fairies await them! In this first book in the series, Rachel and Kirsty meet Ruby the Red Fairy at the end of the rainbow."
        }
        



    ];

    const container = $('#cardContainer');

    cardData.forEach(function (book) {
        var card = '<div class="col-md-4">' +
            '<div class="card mb-3" data-tippy-content="' + book.title + '">' +
            '<div class="card-body">' +
            '<img src="' + book.image + '" alt="' + book.title + '" class="card-img-top" style="max-height: 1500px;">' +
            '<h5 class="card-title">Title: ' + book.title + '</h5>' +
            '<p class="card-text">Author: ' + book.author + '</p>' +
            '<p id="card-genre" class="card-text">Genre: ' + book.genre + '</p>' +
            '<button class="reserve-btn" data-reserved="false" style="background-color: green;">Reserve</button>' +
            '<button type="button" class="view-details-btn btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookModal" data-title="' + book.title + '" data-author="' + book.author + '" data-genre="' + book.genre + '" data-content="' + book.content + '">View Details</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        container.append(card);
    });

    tippy('[data-tippy-content]', {
        placement: 'top', // Show tooltip on top
        arrow: true, // Show arrow
    });

    // View details button click event
    $('.view-details-btn').click(function () {

        var title = $(this).data('title');
        var author = $(this).data('author');
        var genre = $(this).data('genre');
        var content = $(this).data('content');

        console.log("Book details:", title, author, genre, content); // Check if the data is retrieved correctly

        var modalBody = '<h5>Title: ' + title + '</h5>' +
            '<p>Author: ' + author + '</p>' +
            '<p>Genre: ' + genre + '</p>' +
            '<p>Content: ' + content + '</p>';

        $('#bookModal .modal-body').html(modalBody);

    });


    // // Delegate event listener to the container for the View Details button
    // container.on('click', '.view-details-btn', function () {
    //     var title = $(this).data('title');
    //     var author = $(this).data('author');
    //     var genre = $(this).data('genre');
    //     var content = $(this).data('content');

    //     var modalBody = '<h5>Title: ' + title + '</h5>' +
    //         '<p>Author: ' + author + '</p>' +
    //         '<p>Genre: ' + genre + '</p>' +
    //         '<p>Content: ' + content + '</p>';

    //     $('#bookModal .modal-body').html(modalBody);
    // });

    // Reserve button click event
    container.on('click', '.reserve-btn', function () {
        var reserved = $(this).data('reserved');
        if (reserved) {
            $(this).text('Reserve').css('background-color', 'green');
        } else {
            $(this).text('Reserved').css('background-color', 'grey');
        }
        $(this).data('reserved', !reserved);
    });

    // Create the bar chart
    var ctx = document.getElementById('genreChart').getContext('2d');

    var genreData = {
        labels: ['Fantasy', 'Science Fiction', 'Mystery', 'Thriller', 'Romance', 'Non-fiction', 'Bio and Memoirs'],
        datasets: [{
            label: 'No. of Books',
            data: [12, 19, 3, 5, 2, 3, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(231, 233, 237, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(231, 233, 237, 1)'
            ],
            borderWidth: 1
        }]
    };

    var genreChart = new Chart(ctx, {
        type: 'bar',
        data: genreData,
        options: {
            animation: {
                duration: 2000, // Animation duration in milliseconds
                delay: 2000, // Delay before animation starts in milliseconds
                easing: 'easeInOutQuart' // Easing function for animation
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Genres'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of Books'
                    },
                    beginAtZero: true
                }
            }
        }
    });


    const tableData = [
        ['Sailor Moon', 'Naoko Takeuchi', 'Fantasy', 'Sailor Moon is a Japanese shōjo manga series written and illustrated by Naoko Takeuchi. It was originally serialized in Nakayoshi from 1991 to 1997; the 60 individual chapters were published in 18 tankōbon volumes. The series follows the adventures of a schoolgirl named Usagi Tsukino as she transforms into Sailor Moon to search for a magical artifact, the "Legendary Silver Crystal". She leads a group of comrades, the Sailor Soldiers as they battle against villains to prevent the theft of the Silver Crystal and the destruction of the Solar System.'],
        ['Youve Reached Sam', 'Dustin Thao', 'Romance', 'A heartfelt novel about love and loss and what it means to say goodbye. How do you move forward when everything you love is on the line?'],
        ['Hamlet', 'William Shakespeare', 'Bio and Memoirs', 'Hamlet, another brilliant work by Shakespeare, revolves around the internal struggles of the young Prince Hamlet as he seeks revenge for his father’s murder. The play is renowned for its exploration of existential themes, political intrigue, and the complexities of the human psyche.'],
        ['Five Have Plenty of Fun', 'Enid Blyton', 'Mystery', 'Join the Famous Five on another thrilling adventure as Julian, Dick, Anne, George, and their loyal dog Timmy uncover mysteries and solve puzzles. Written by Enid Blyton, this installment in the Famous Five series is filled with suspense, camaraderie, and plenty of fun.'],
        ["Five Nights at Freddy's Graphic Novel #1", 'Scott Cawthon', 'Science Fiction', "A decade after the unsettling murders at Freddy Fazbear's Pizza tore apart their community, Charlie, the daughter of the restaurant's owner, reunites with her childhood friends on the tragic anniversary. As they venture into the long-abandoned pizza place, locked up for years, they uncover a chilling revelation: the once friendly, adult-sized animatronic mascots that entertained visitors now harbor a sinister secret and a deadly agenda."],
        ['Close Enough to Hurt: A Novel', 'Katherine A. Olson', 'Thriller', 'Dive into this gripping debut where revenge merges with the essence of "Promising Young Woman," unveiling a vigilant mission against predatory men. A captivating read for enthusiasts of Jeneva Rose and Layne Fargo.'],
        ["I'm Glad My Mom Died", 'Jennette McCurdy', 'Bio and Memoir', 'A heartbreaking and hilarious memoir by iCarly and Sam & Cat star Jennette McCurdy about her struggles as a former child actor—including eating disorders, addiction, and a complicated relationship with her overbearing mother—and how she retook control of her life.'],
        ['The Pages of Time: A Time Travel Thriller Kindle Edition', 'Damian Knight', 'Thriller', 'With the clock ticking and danger lurking at every turn, can he save his family from violent deaths that are already in the past, thwart the sinister forces that wish to use him for their own ends, and maybe also win the girl he loves, by rewriting the pages of time?'],
        ['A spelltacular Ever After High Year', 'Edda Usa', 'Fantasy', 'Based on Mattel\'s Ever After High, this inventive yearbook invites fans to walk the enchanted school halls of the magical boarding school along with their favorite Royals and Rebels, and discover cool character profiles, highlights from "best moments of the year," class photos, fantastical stories, and much more'],
        ['Off Centre', 'Haresh Sharma', 'Non-fiction', 'Off Centre is The Necessary Stages landmark play in the history of Singapore Theatre. It is best remembered for bringing mental illness and its patients’ plight to the attention of the media and the public. Haresh Shama ,off centre , non fiction'],
        ['The Busy Body', 'Kemper Donovan', 'Mystery', 'Its a dream assignment. Former Senator Dorothy Gibson, aka that woman, is the most talked-about person in the country right now, though largely for the wrong reasons. As an independent candidate for President of the United States, Dorothy split the vote and is being blamed for the shocking result. After her very public defeat, shes retreated to her home in rural Maine, inviting her ghostwriter to join her.'],
        ["Rainbow Magic: Ruby the Red Fairy", "Daisy Meadows", "Fiction", "When Rachel and Kirsty meet on the ferry to Rainspell Island one summer holiday, they have no idea that such incredible adventures with the fairies await them! In this first book in the series, Rachel and Kirsty meet Ruby the Red Fairy at the end of the rainbow."]
    
    ];



    new DataTable('#list', {
        columns: [
            { title: 'Title' },
            { title: 'Author' },
            { title: 'Genre' },
            { title: 'Content' },
        ],
        data: tableData
    });
});



$('#searchButton').click(function () {
    var searchText = $('#searchInput').val().toLowerCase();
    $('#cardContainer .card').each(function () {
        var title = $(this).find('.card-title').text().toLowerCase();
        var author = $(this).find('.card-text').eq(0).text().toLowerCase();
        if (title.includes(searchText) || author.includes(searchText)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

$('#filterDropdown').change(function () {
    var selectedGenre = $(this).val();

    var genre;
    $('#cardContainer .card').each(function () {
        genre = $(this).find('#card-genre').text().trim()+"";
        // genre = genre.substring(6);
        if (selectedGenre === "" || genre === "Genre: "+selectedGenre) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});


// $(document).ready(function () {
//     $('#example').DataTable({
//         data: cardData,
//         columns: [
//             { title: "Title", data: "title" },
//             { title: "Author", data: "author" },
//             { title: "Genre", data: "genre" },
//             { title: "Content", data: "content" }
//         ]
//     });
// });