function listMdFiles() {
    const mdFiles = [
        "markdown/caffe_tier_list.md",
        "markdown/tesla_p40_inH110.md",
        "markdown/best_opensource_linux_software.md",
        "markdown/engineering.md",
        "markdown/ML/other_ml.md",
        "markdown/ML/text_models_and_reasoning.md",
        "markdown/Politics - Política/co-ops.md",
        "markdown/Politics - Política/society_politics.md",
        "markdown/Politics - Política/los_objetivos_de_la_sociedad.md",
        "markdown/Politics - Política/remigracion.md",
        "markdown/Recetas/pasta_fresca.md",
        "markdown/Recetas/pizza.md",
        "markdown/Recetas/pan.md",
        "markdown/Recetas/pan_plano.md",
        "markdown/Recetas/coca_llanda_zanahoria.md"
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
