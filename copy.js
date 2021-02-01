// Change LANGUAGE

document.querySelectorAll(".lang").forEach((button) => {
	button.addEventListener("click", () => {
		lang(button.value); // executa la funció per canviar de llenguatge
	});
});

var copy = {
	titol: {
		id: "titol",
		cat: "Biografia",
		cast: "Biografía",
		eng: "Biography",
	},

	bio: {
		id: "bio",
		cat:
			"CAT Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt itaque deserunt nihil delectus corrupti ab, laudantium numquam esse consequatur reprehenderit commodi dolorum repellat. Repellendus, placeat blanditiis obcaecati at cupiditate quaerat recusandae voluptas culpa a! In ea harum dicta quas modi consequatur. Ad ab maiores quam magnam, beatae commodi eos porro sunt. Modi at voluptatibus in eum quibusdam. Autem excepturi, praesentium facilis labore magni quos? Consectetur quod maiores fugit perspiciatis, quia tenetur dolor aut iusto, tempore exercitationem quibusdam beatae itaque inventore mollitia praesentium quam. Necessitatibus quia cumque iste maxime ex, nisi saepe aspernatur eum beatae optio sequi esse alias dolor? Mollitia nulla quibusdam quasi architecto sed iusto et perferendis voluptates consequatur corporis, vero omnis accusamus hic dolores sint in aliquam! Distinctio dolores at consequatur accusantium a earum, reprehenderit alias nisi illum! Corporis accusamus error tempora autem tenetur beatae provident reiciendis quasi, vitae, minus ea iusto vel facilis unde assumenda, corrupti laborum libero quisquam? Ex molestiae dolorum, dolorem itaque quia accusantium nobis ipsum nesciunt harum consequatur unde praesentium. Quo sunt perspiciatis voluptatibus labore eaque. Enim illum labore eaque quam corporis itaque ex a praesentium ipsum est facilis cum eius iusto, optio excepturi, minus sapiente soluta, porro debitis. Exercitationem quam illo voluptates ex.",
		cast:
			"CAST Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt itaque deserunt nihil delectus corrupti ab, laudantium numquam esse consequatur reprehenderit commodi dolorum repellat. Repellendus, placeat blanditiis obcaecati at cupiditate quaerat recusandae voluptas culpa a! In ea harum dicta quas modi consequatur. Ad ab maiores quam magnam, beatae commodi eos porro sunt. Modi at voluptatibus in eum quibusdam. Autem excepturi, praesentium facilis labore magni quos? Consectetur quod maiores fugit perspiciatis, quia tenetur dolor aut iusto, tempore exercitationem quibusdam beatae itaque inventore mollitia praesentium quam. Necessitatibus quia cumque iste maxime ex, nisi saepe aspernatur eum beatae optio sequi esse alias dolor? Mollitia nulla quibusdam quasi architecto sed iusto et perferendis voluptates consequatur corporis, vero omnis accusamus hic dolores sint in aliquam! Distinctio dolores at consequatur accusantium a earum, reprehenderit alias nisi illum! Corporis accusamus error tempora autem tenetur beatae provident reiciendis quasi, vitae, minus ea iusto vel facilis unde assumenda, corrupti laborum libero quisquam? Ex molestiae dolorum, dolorem itaque quia accusantium nobis ipsum nesciunt harum consequatur unde praesentium. Quo sunt perspiciatis voluptatibus labore eaque. Enim illum labore eaque quam corporis itaque ex a praesentium ipsum est facilis cum eius iusto, optio excepturi, minus sapiente soluta, porro debitis. Exercitationem quam illo voluptates ex.",
		eng:
			"ENG Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt itaque deserunt nihil delectus corrupti ab, laudantium numquam esse consequatur reprehenderit commodi dolorum repellat. Repellendus, placeat blanditiis obcaecati at cupiditate quaerat recusandae voluptas culpa a! In ea harum dicta quas modi consequatur. Ad ab maiores quam magnam, beatae commodi eos porro sunt. Modi at voluptatibus in eum quibusdam. Autem excepturi, praesentium facilis labore magni quos? Consectetur quod maiores fugit perspiciatis, quia tenetur dolor aut iusto, tempore exercitationem quibusdam beatae itaque inventore mollitia praesentium quam. Necessitatibus quia cumque iste maxime ex, nisi saepe aspernatur eum beatae optio sequi esse alias dolor? Mollitia nulla quibusdam quasi architecto sed iusto et perferendis voluptates consequatur corporis, vero omnis accusamus hic dolores sint in aliquam! Distinctio dolores at consequatur accusantium a earum, reprehenderit alias nisi illum! Corporis accusamus error tempora autem tenetur beatae provident reiciendis quasi, vitae, minus ea iusto vel facilis unde assumenda, corrupti laborum libero quisquam? Ex molestiae dolorum, dolorem itaque quia accusantium nobis ipsum nesciunt harum consequatur unde praesentium. Quo sunt perspiciatis voluptatibus labore eaque. Enim illum labore eaque quam corporis itaque ex a praesentium ipsum est facilis cum eius iusto, optio excepturi, minus sapiente soluta, porro debitis. Exercitationem quam illo voluptates ex.",
	},

	exp: {
		id: "exp",
		cat: "Experiència",
		cast: "Experiencia",
		eng: "Experience",
	},

	experiencia: {
		id: "experiencia",
		cat:
			"CAT Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt itaque deserunt nihil delectus corrupti ab, laudantium numquam esse consequatur reprehenderit commodi dolorum repellat. Repellendus, placeat blanditiis obcaecati at cupiditate quaerat recusandae voluptas culpa a! In ea harum dicta quas modi consequatur. Ad ab maiores quam magnam, beatae commodi eos porro sunt. Modi at voluptatibus in eum quibusdam. Autem excepturi, praesentium facilis labore magni quos? Consectetur quod maiores fugit perspiciatis, quia tenetur dolor aut iusto, tempore exercitationem quibusdam beatae itaque inventore mollitia praesentium quam. Necessitatibus quia cumque iste maxime ex, nisi saepe aspernatur eum beatae optio sequi esse alias dolor? Mollitia nulla quibusdam quasi architecto sed iusto et perferendis voluptates consequatur corporis, vero omnis accusamus hic dolores sint in aliquam! Distinctio dolores at consequatur accusantium a earum, reprehenderit alias nisi illum! Corporis accusamus error tempora autem tenetur beatae provident reiciendis quasi, vitae, minus ea iusto vel facilis unde assumenda, corrupti laborum libero quisquam? Ex molestiae dolorum, dolorem itaque quia accusantium nobis ipsum nesciunt harum consequatur unde praesentium. Quo sunt perspiciatis voluptatibus labore eaque. Enim illum labore eaque quam corporis itaque ex a praesentium ipsum est facilis cum eius iusto, optio excepturi, minus sapiente soluta, porro debitis. Exercitationem quam illo voluptates ex.",
		cast:
			"CAST Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt itaque deserunt nihil delectus corrupti ab, laudantium numquam esse consequatur reprehenderit commodi dolorum repellat. Repellendus, placeat blanditiis obcaecati at cupiditate quaerat recusandae voluptas culpa a! In ea harum dicta quas modi consequatur. Ad ab maiores quam magnam, beatae commodi eos porro sunt. Modi at voluptatibus in eum quibusdam. Autem excepturi, praesentium facilis labore magni quos? Consectetur quod maiores fugit perspiciatis, quia tenetur dolor aut iusto, tempore exercitationem quibusdam beatae itaque inventore mollitia praesentium quam. Necessitatibus quia cumque iste maxime ex, nisi saepe aspernatur eum beatae optio sequi esse alias dolor? Mollitia nulla quibusdam quasi architecto sed iusto et perferendis voluptates consequatur corporis, vero omnis accusamus hic dolores sint in aliquam! Distinctio dolores at consequatur accusantium a earum, reprehenderit alias nisi illum! Corporis accusamus error tempora autem tenetur beatae provident reiciendis quasi, vitae, minus ea iusto vel facilis unde assumenda, corrupti laborum libero quisquam? Ex molestiae dolorum, dolorem itaque quia accusantium nobis ipsum nesciunt harum consequatur unde praesentium. Quo sunt perspiciatis voluptatibus labore eaque. Enim illum labore eaque quam corporis itaque ex a praesentium ipsum est facilis cum eius iusto, optio excepturi, minus sapiente soluta, porro debitis. Exercitationem quam illo voluptates ex.",
		eng:
			"ENG Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt itaque deserunt nihil delectus corrupti ab, laudantium numquam esse consequatur reprehenderit commodi dolorum repellat. Repellendus, placeat blanditiis obcaecati at cupiditate quaerat recusandae voluptas culpa a! In ea harum dicta quas modi consequatur. Ad ab maiores quam magnam, beatae commodi eos porro sunt. Modi at voluptatibus in eum quibusdam. Autem excepturi, praesentium facilis labore magni quos? Consectetur quod maiores fugit perspiciatis, quia tenetur dolor aut iusto, tempore exercitationem quibusdam beatae itaque inventore mollitia praesentium quam. Necessitatibus quia cumque iste maxime ex, nisi saepe aspernatur eum beatae optio sequi esse alias dolor? Mollitia nulla quibusdam quasi architecto sed iusto et perferendis voluptates consequatur corporis, vero omnis accusamus hic dolores sint in aliquam! Distinctio dolores at consequatur accusantium a earum, reprehenderit alias nisi illum! Corporis accusamus error tempora autem tenetur beatae provident reiciendis quasi, vitae, minus ea iusto vel facilis unde assumenda, corrupti laborum libero quisquam? Ex molestiae dolorum, dolorem itaque quia accusantium nobis ipsum nesciunt harum consequatur unde praesentium. Quo sunt perspiciatis voluptatibus labore eaque. Enim illum labore eaque quam corporis itaque ex a praesentium ipsum est facilis cum eius iusto, optio excepturi, minus sapiente soluta, porro debitis. Exercitationem quam illo voluptates ex.",
	},
};

function lang(lang) {
	for (const key in copy) {
		const element = copy[key];
		document.querySelector(`#${element.id}`).innerHTML = element[lang];
	}
}
