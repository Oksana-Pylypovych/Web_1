function HandlebarsTemplate({templateId, parentNodeSelector, data} = {})
{
    var template = document.getElementById(templateId).innerHTML;

    var interpretator = Handlebars.compile(template);

    var resultHTML = interpretator(data);

    document.querySelector(parentNodeSelector).innerHTML += resultHTML;
}

// PLUSES
HandlebarsTemplate(
{
    templateId: "pluses-comment-template",
    parentNodeSelector: "#pluses .row:nth-child(1)",
    data:
    {
        comments:
        [
            {
                Text: "Molestie a iaculis at erat pellentesque adipiscing commodo. Amet cursus sit amet dictum sit amet justo. "
            },
            {
                Text: "Feugiat nisl pretium fusce id velit ut tortor pretium. Sed tempus urna et pharetra pharetra massa massa."+
                " Est velit egestas dui id ornare arcu odio ut sem. Nunc aliquet bibendum enim facilisis gravida. Ultricies mi quis hendrerit dolor magna"
            }
        ]
    }
})
HandlebarsTemplate(
{
    templateId: "pluses-comment-template",
    parentNodeSelector: "#pluses .row:nth-child(2)",
    data:
    {
        comments:
        [
            {
                Text: "Enim ut sem viverra aliquet eget. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et."+
                "Eu consequat ac felis donec et odio pellentesque diam volutpat. Vel eros donec ac odio tempor orci dapibus ultrices in."
            },
            {
                Text: "Vestibulum morbi blandit cursus risus at. Sagittis eu volutpat odio facilisis mauris."
            }
        ]
    }
})


// REVIEW
HandlebarsTemplate(
{
    templateId: "review-item-template",
    parentNodeSelector: "#reviews .row:nth-child(1)",
    data:
    {
        review_items:
        [
            {
                AuthorName: "Oksána Pylypóvych",
                Avatar: "images/images/avatars/Oksana.png",
                Text: "Donec fringilla ! Justo sit amet venenatis ultricies, nibh velit suscipit dolor, ut sagittis mi ipsum ac nibh. "+
                        "Maecenas aliquam sodales libero et tristique. In mi sapien, ullamcorper sit amet purus ut, euismod pulvinar nulla."
            },
            {
                AuthorName: "John Smith",
                Avatar: "images/no_avatar_75x75.png",
                Text: "Donec rhoncus risus quis mauris fermentum varius eget nec dui. Suspendisse sapien velit, dapibus quis metus sit amet, ultrices commodo nibh."
            },
        ]
    }
})
HandlebarsTemplate(
{
    templateId: "review-item-template",
    parentNodeSelector: "#reviews .row:nth-child(2)",
    data:
    {
        review_items:
        [
            {
                AuthorName: "Rémy Métailler",
                Avatar: "images/images/avatars/Remmy.png",
                Text: "In rutrum dui id molestie pulvinar. Magna etiam tempor orci eu lobortis."
            },
            {
                AuthorName: "Jane Smith",
                Avatar: "images/images/avatars/Jane-yoda.png",
                Text: "Purus non enim praesent elementum facilisis leo vel fringilla ? Sit amet nulla facilisi morbi !"+
                        " Vitae ultricies leo integer malesuada nunc... "
            },
        ]
    }
})

// TOP ITEMS
HandlebarsTemplate(
{
    templateId: "top-item-template",
    parentNodeSelector: "#top-most .grid",
    data:
    {
        top_items:
        [
            //1
            {
                Name: "Ibis Ripmo GX 2018",
                AltImageText: "Ibis Ripmo GX 2018",
                Image: "Ibis-Ripmo-GX-2018.jpg"
            },
            //2
            {
                Name: "Specialized Stumpjumper Comp Carbon 27.5 Woman",
                AltImageText: "Specialized Stumpjumper Comp Carbon 27.5 12 Speed Woman",
                Image: "Specialized-Stumpjumper-Comp-Carbon-27.5-12-Speed-Woman.jpg"
            },
            //3
            {
                Name: "Specialized Fuse Expert 29",
                AltImageText: "Specialized Fuse Expert 29 2020",
                Image: "Specialized-Fuse-Expert-29-2020.jpg"
            },
            //4
            {
                Name: "(New) Canyon Roadlite CF 8.0",
                AltImageText: "Canyon Roadlite CF 8.0",
                Image: "Canyon-Roadlite-CF-8.0.jpg"
            },
            //5
            {
                Name: "(New) Liv Envie Advanced 1",
                AltImageText: "Liv Envie Advanced 1",
                Image: "Liv-Envie-Advanced-1.jpg"
            },
            //6
            {
                Name: "(New) Felt Verza Speed 6",
                AltImageText: "Felt Verza Speed 6",
                Image: "Felt-Verza-Speed-6-Hybrid.jpg"
            },
        ]
    }
})

// BUY ITEMS
HandlebarsTemplate(
{
    templateId: "buy-item-template",
    parentNodeSelector: "#buy .row",
    data:
    {
        buy_items:
        [
            //1
            {
                Name: "Ibis Ripmo GX 2018",
                Price: "5 099",
                AltImageText: "Ibis Ripmo GX 2018",
                Image: "Ibis-Ripmo-GX-2018.jpg"
            },
            //2
            {
                Name: "Specialized Stumpjumper Comp Carbon 27.5 Woman",
                Price: "4 520",
                AltImageText: "Specialized Stumpjumper Comp Carbon 27.5 12 Speed Woman",
                Image: "Specialized-Stumpjumper-Comp-Carbon-27.5-12-Speed-Woman.jpg"
            },
            //3
            {
                Name: "Specialized Fuse Expert 29",
                Price: "2 150",
                AltImageText: "Specialized Fuse Expert 29 2020",
                Image: "Specialized-Fuse-Expert-29-2020.jpg"
            },
            //4
            {
                Name: "(NEW) Canyon Roadlite CF 8.0",
                Price: "1 599",
                AltImageText: "Canyon Roadlite CF 8.0",
                Image: "Canyon-Roadlite-CF-8.0.jpg"
            },
            //5
            {
                Name: "(NEW) Liv Envie Advanced 1",
                Price: "2 450",
                AltImageText: "Liv Envie Advanced 1",
                Image: "Liv-Envie-Advanced-1.jpg"
            },
            //6
            {
                Name: "(NEW) Felt Verza Speed 6",
                Price: "1 790",
                AltImageText: "Felt Verza Speed 6",
                Image: "Felt-Verza-Speed-6-Hybrid.jpg"
            },
            //7
            {
                Name: "Marin Alpine Trail 7",
                Price: "2 749",
                AltImageText: "Marin Alpine Trail 7",
                Image: "Marin-Alpine-Trail-7.jpg"
            },
            //8
            {
                Name: "Kona Wozo 2019",
                Price: "1 990",
                AltImageText: "Kona Wozo 2019",
                Image: "Kona-Wozo-2019.jpg"
            },
            //9
            {
                Name: "Specialized Turbo Levo Comp",
                Price: "5 775",
                AltImageText: "Specialized Turbo Levo Comp",
                Image: "Specialized-Turbo-Levo-Comp.jpg"
            },
        ]
    }
})
