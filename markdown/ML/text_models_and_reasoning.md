## What to use to run LLms?
* https://www.reddit.com/r/LocalLLaMA/comments/1rwwqbm/my_company_just_handed_me_a_2x_h200_282gb_vram/
  * ollama is shit compared to vLLM. 
  * vLLM is way better than llama.cpp for concurrent requests but llama.cpp is key nowadays for local inference.



## Best Open Models (extremely old)
$$------------$$
Latest, DeepSeek is the boss now. And the finetunes of DeepSeek-R1 are la fucking hostia:
https://www.reddit.com/r/LocalLLaMA/comments/1i5q6b9/deepseekr1_and_distilled_benchmarks_color_coded/?rdt=48020

Qwen2.5 as chatgpt/sonnet:
https://huggingface.co/spaces/Qwen/Qwen2.5-Turbo-1M-Demo  
Also Phi-3.5:
https://huggingface.co/microsoft/Phi-3.5-mini-instruct

QwQ if you really want a model to think thoroughly:  
https://huggingface.co/bartowski/QwQ-32B-Preview-GGUF  
https://huggingface.co/spaces/Qwen/QwQ-32B-preview

To extract to JSON:
https://huggingface.co/spaces/numind/NuExtract-1.5

### Interesting projects:
* https://github.com/vndee/local-talking-llm
* https://github.com/langgenius/dify