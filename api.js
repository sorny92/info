function listMdFiles() {
    const mdFiles = [
        "markdown/caffe_tier_list.md",
        "markdown/society_politics.md",
        "markdown/tesla_p40_inH110.md",
        "markdown/best_opensource_linux_software.md",
        "markdown/ML/other_ml.md",
        "markdown/ML/text_models_and_reasoning.md",
        "markdown/recetas/pasta_fresca.md",
        "markdown/recetas/pizza.md",
        "markdown/recetas/pan.md",
        "markdown/recetas/pan_plano.md",
        "markdown/recetas/coca_llanda_zanahoria.md"
    ];

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mdFiles);
        }, 100);
    });
}

window.getMdFiles = listMdFiles;

listMdFiles().then(files => {
    console.log('Markdown files:', files);
});
