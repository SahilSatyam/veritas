const fs = require('fs');
const path = require('path');

const DAYS_DIR = path.join(__dirname, '..', 'content', 'days');

const updates = {
    // Batch A (005-010)
    "005.mdx": [
        [
            '- **Tool:** **MLflow** (Open Source, standard, local-first) or **Weights & Biases (WandB)** (SaaS, excellent visualization). We will use MLflow for this guide as it requires no account setup.',
            '- **Tool:** **MLflow** (Open Source, standard, local-first), **Weights & Biases (WandB)** (SaaS, excellent visualization), or **Neptune.ai** (highly customizable metadata store for teams). We will use MLflow for this guide as it requires no account setup.'
        ],
        [
            '- **Tooling:** [MLflow Tracking Documentation](https://mlflow.org/docs/latest/tracking.html).',
            '- **Tooling:** [MLflow Tracking Documentation](https://mlflow.org/docs/latest/tracking.html).\n- **Alternative:** [Neptune.ai Documentation](https://docs.neptune.ai/) - Highly customizable metadata store for team collaboration.'
        ]
    ],
    "006.mdx": [],
    "007.mdx": [],
    "008.mdx": [],
    "009.mdx": [],
    "010.mdx": [],

    // Batch B (015-020)
    "015.mdx": [
        [
            'tags: ["OpenAI API", "Tokenization", "FinOps", "Prompt Injection", "GPT-4"]',
            'tags: ["OpenAI API", "Tokenization", "FinOps", "Prompt Injection", "GPT-4", "Claude 3.7", "Gemini 2.5"]'
        ],
        [
            'An LLM API call can cost $0.03 to $0.30 depending on complexity.',
            'An LLM API call can cost $0.002 to $0.15 depending on complexity (frontier models like GPT-4o, Gemini 2.5 Pro, and Claude 3.7 Sonnet are priced per million tokens, representing a massive shift in unit economics).'
        ],
        [
            '    "gpt-4o": {"input": 0.005, "output": 0.015},\n    "gpt-4o-mini": {"input": 0.00015, "output": 0.0006}',
            '    "gpt-4o": {"input": 5.0, "output": 15.0}, // per million tokens\n    "gpt-4o-mini": {"input": 0.15, "output": 0.6}, // per million tokens\n    "claude-3-7-sonnet": {"input": 3.0, "output": 15.0}, // per million tokens\n    "gemini-2-5-pro": {"input": 1.25, "output": 5.0}'
        ],
        [
            '- **GPT-4o (The "PhD"):** Use for complex reasoning, coding, and nuance. High cost.',
            '- **GPT-4o / Claude 3.7 Sonnet / Gemini 2.5 Pro (The "PhD" Tier):** Use for complex reasoning, coding, and nuance. High cost but extremely capable.\n- **Claude 3.7 Extended Thinking / o3 / o4-mini (The "System 2" Tier):** For tasks requiring deep, multi-step logical deduction.'
        ],
        [
            'Using GPT-4 for simple classification is burning money. Always start with the smallest model that works.',
            'Using GPT-4o for simple classification is burning money. Always start with the smallest model that works (such as GPT-4o-mini, Gemini 2.5 Flash, or Llama 3.3 8B).'
        ],
        [
            '- _Strategy:_ Use GPT-4 to _generate_ training data, then fine-tune a smaller model (like Llama 3 or 4o-mini) to do the task cheaply.',
            '- _Strategy:_ Use GPT-4o to _generate_ training data (Knowledge Distillation), then fine-tune a smaller model (like Llama 3.3 8B or Phi-4) to do the task cheaply and privately.'
        ]
    ],
    "016.mdx": [
        [
            '## 4. Production-Grade Implementation\n\n### The Stack\n\n- **Compute:** AWS EC2 instances with NVIDIA GPUs (e.g., A10G for inference, H100/A100 for training).',
            '## 4. Production-Grade Implementation\n\n### The Stack\n\n- **Compute:** AWS EC2 instances with NVIDIA GPUs (e.g., A10G for inference, H100/A100 for training), or AWS Inferentia2 / Trainium2 chips (purpose-built custom silicon for high-efficiency, cost-effective inference and training). GCP offers TPU v5e for scaled neural net training.\n- **Inference Accelerators:** Groq LPU (Language Processing Unit) for ultra-low latency, real-time inference on open-weight models.'
        ],
        [
            'A P4d.24xlarge instance on AWS costs approximately \\$32/hour.',
            'A P4d.24xlarge instance on AWS costs approximately \\$32/hour, while custom Trainium instances offer up to 50% better price-performance.'
        ]
    ],
    "017.mdx": [
        [
            '- **Tool:** [Act (Run GitHub Actions locally)](https://github.com/nektos/act) - Save time by testing pipelines on your laptop.',
            '- **Tool:** [Act (Run GitHub Actions locally)](https://github.com/nektos/act) - Save time by testing pipelines on your laptop.\n- **Modern Alternative:** [Dagger.io](https://dagger.io/) - A portable CI/CD engine that runs pipelines as containerized DAGs locally or in any CI runner identically.'
        ]
    ],
    "018.mdx": [
        [
            '- **Tool:** [Amundsen (Lyft\'s Data Discovery)](https://www.amundsen.io/).\n- **Tool:** [DataHub (LinkedIn\'s Metadata Platform)](https://datahubproject.io/).',
            '- **Tool:** [Amundsen (Lyft\'s Data Discovery)](https://www.amundsen.io/).\n- **Tool:** [DataHub (LinkedIn\'s Metadata Platform)](https://datahubproject.io/).\n- **Standard:** [OpenLineage](https://openlineage.io/) (open standard for data lineage collection).\n- **Tool:** [Marquez](https://marquezproject.github.io/marquez/) (metadata server and reference implementation of OpenLineage).'
        ]
    ],
    "019.mdx": [],
    "020.mdx": [],

    // Batch C (024-030)
    "024.mdx": [
        [
            '- **Framework**: **Pydantic** (v1 or v2) to define the schema.',
            '- **Framework**: **Pydantic** (v2) to define the schema with native speed and validation features.'
        ],
        [
            '    # 2. Call the API with "tool_choice" forced\n    response = client.chat.completions.create(\n        model="gpt-5.2-instant", # or gpt-4o\n        messages=[\n            {"role": "system", "content": "You are a data extraction engine. Extract the expense details exactly."},\n            {"role": "user", "content": email_body}\n        ],\n        tools=tools,\n        tool_choice={"type": "function", "function": {"name": "extract_expense"}} # FORCE the call\n    )\n\n    # 3. Securely Parse\n    tool_call = response.choices[0].message.tool_calls[0]\n    arguments = json.loads(tool_call.function.arguments)\n\n    # 4. Validate with Pydantic (This catches hallucinations like "Amount: One Million")\n    try:\n        expense = ExpenseItem(**arguments)\n        return expense',
            '    # 2. Call the API using OpenAI Structured Outputs (JSON Schema strict mode)\n    response = client.chat.completions.create(\n        model="gpt-4o",\n        messages=[\n            {"role": "system", "content": "You are a data extraction engine. Extract the expense details exactly."},\n            {"role": "user", "content": email_body}\n        ],\n        response_format={\n            "type": "json_schema",\n            "json_schema": {\n                "name": "expense_extraction",\n                "schema": ExpenseItem.model_json_schema(),\n                "strict": true\n            }\n        }\n    )\n\n    # 3. Securely Parse using Pydantic v2 model validation\n    try:\n        expense = ExpenseItem.model_validate_json(response.choices[0].message.content)\n        return expense'
        ]
    ],
    "025.mdx": [
        [
            '- **Database:** **Redis** (extremely fast key-value store) or a relational database.',
            '- **Database:** **Redis** (extremely fast key-value store), **Zep** (purpose-built long-term memory store for AI agents), or **LangMem** (for long-term personalized memory extraction).'
        ]
    ],
    "026.mdx": [
        [
            '- **Benchmarks:** Use public benchmarks (e.g., MMLU for knowledge, GSM8K for math) only as general indicators.',
            '- **Benchmarks:** Use public benchmarks (e.g., MMLU-Pro for harder reasoning, MT-Bench for multi-turn chat, and LiveBench to prevent contamination) as general indicators.'
        ]
    ],
    "027.mdx": [
        [
            '- **Judge Model:** **GPT-4** (due to its high agreement with human raters).',
            '- **Judge Model:** **GPT-4o** or **Claude 3.7 Sonnet** (due to their high alignment with human evaluations).\n- **Open-source Alternative:** **Prometheus-2** (an open-source judge model designed specifically to mimic GPT-4 evaluation behaviors at a fraction of the cost).\n- **Framework:** **G-Eval** (formulating evaluations using chain-of-thought grading criteria).'
        ]
    ],
    "028.mdx": [
        [
            '- **Models:** **text-embedding-ada-002** (OpenAI, standard) or **all-MiniLM-L6-v2** (HuggingFace, local/free).',
            '- **Models:** **text-embedding-3-large** (OpenAI, current standard), **Cohere Embed v3** (highly robust multi-lingual and compression features), **Voyage AI** (custom domain-specific embeddings), **Jina v3**, or local options like **BGE-large**.'
        ]
    ],
    "029.mdx": [
        [
            '- **Vector Database:** **Pinecone** (SaaS, fast, fully managed) or **Chroma** (Open Source, local/in-memory). We will use Chroma for this guide for ease of setup.',
            '- **Vector Database:** **Qdrant** (dominant open-source production vector DB, highly scalable and performant), **Pinecone** (SaaS, fast, fully managed, using modern v3+ SDK), **Weaviate**, or **Chroma** (Open Source, local/in-memory). We will use Chroma for this guide for ease of setup.'
        ],
        [
            '    pinecone.init(api_key="your-api-key", environment="your-env")\n    index = pinecone.Index("my-index")',
            '    # Pinecone v3+ syntax\n    from pinecone import Pinecone\n    pc = Pinecone(api_key="your-api-key")\n    index = pc.Index("my-index")'
        ]
    ],
    "030.mdx": [
        [
            '- **Orchestration:** **LangChain** (extremely popular, comprehensive) or a manual python pipeline.',
            '- **Orchestration:** **LangChain** (v0.3+ with strict modular imports) or **LlamaIndex** (v0.10+ data-centric framework).'
        ]
    ],

    // Batch D (035-040)
    "035.mdx": [
        [
            '- **Database:** **Redis** (extremely fast in-memory store).',
            '- **Database:** **Redis** (extremely fast in-memory store) or **GPTCache** (dedicated semantic caching layer for LLMs).'
        ]
    ],
    "036.mdx": [
        [
            '- **Observability Platform:** **OpenTelemetry** (Standard for open traces) or standard APMs (Datadog).',
            '- **Observability Platform:** **OpenTelemetry** (Standard), **LangSmith** (LangChain native tracking), **Arize Phoenix**, or **Langfuse** (popular open-source LLM analytics and tracing).'
        ]
    ],
    "037.mdx": [
        [
            '- **Guardrails Framework:** **Guardrails AI** (open-source Pydantic-based validation).',
            '- **Guardrails Framework:** **Guardrails AI** (v0.5+ API using Runner patterns), **NVIDIA NeMo Guardrails** (programmable dialog rails), or **LLM Guard** / **LakeraGuard** (specialized security firewalls).'
        ]
    ],
    "038.mdx": [
        [
            '- **Tool:** **Microsoft Presidio** (Production-grade PII detection).',
            '- **Tool:** **Microsoft Presidio** (Current production-grade multi-language PII engine) or **AWS Comprehend** PII detection service.'
        ]
    ],
    "039.mdx": [
        [
            '- **Vector Database:** **Pinecone** (Enterprise SaaS) or a dedicated self-hosted cluster.',
            '- **Vector Database:** **Qdrant** (production-grade open-source option with distributed scaling), **Pinecone** (v3+ with serverless namespaces and gRPC client), or **pgvector 0.7+** (enabling HNSW indexing directly inside PostgreSQL).'
        ]
    ],
    "040.mdx": [
        [
            '- **Fine-Tuning Technique:** **LoRA** (Low-Rank Adaptation) or **QLoRA** (Quantized LoRA).',
            '- **Fine-Tuning Technique:** **LoRA** (Low-Rank Adaptation), **QLoRA** (Quantized LoRA), **DoRA** (Weight-Decomposed Low-Rank Adaptation for better convergence), **GaLore** (Gradient Low-Rank Projection), or **MoE** (Mixture of Experts) fine-tuning.'
        ],
        [
            'Llama 2', 'Llama 3.3'
        ]
    ],

    // Batch E (046-050)
    "046.mdx": [
        [
            '- **Calibration Library:** `scikit-learn` (`CalibratedClassifierCV`).',
            '- **Calibration Library:** `scikit-learn` (`CalibratedClassifierCV`) to calibrate prediction probabilities, particularly useful in high-stakes classifications.'
        ]
    ],
    "047.mdx": [
        [
            '- **Orchestration:** **Prefect** or **Apache Airflow**.',
            '- **Orchestration:** **Apache Airflow** (2.9+ with modern TaskFlow API), **Prefect** (3.x with native async support), **Dagster** (1.x asset-oriented orchestrator), or **Modal.com** (modern serverless runner for AI pipelines).'
        ]
    ],
    "049.mdx": [
        [
            '- **Analysis Tools:** `scikit-learn` (Confusion Matrix, classification reports).',
            '- **Analysis Tools:** `scikit-learn` (Confusion Matrix, classification reports) or **Cleanlab** (data-centric AI tool for automatically finding label errors in datasets).'
        ]
    ],

    // Batch F (057-060)
    "057.mdx": [
        [
            '- **Standard:** **C2PA** (Coalition for Content Provenance and Authenticity).',
            '- **Standard:** **C2PA** (Coalition for Content Provenance and Authenticity 2.0 specifications) with **Adobe Content Credentials** or Google\'s **SynthID** watermarking technologies.'
        ]
    ],
    "058.mdx": [
        [
            '- **Defense Patterns:** Strict outlier detection and data sanitization.',
            '- **Defense Patterns:** Outlier detection, **BEAST attack** filters, and **TrojAI** trojan detection benchmarks.'
        ]
    ],
    "059.mdx": [
        [
            '- **Algorithm:** **SISA** (Sharded, Isolated, Sliced, and Aggregated) training.',
            '- **Algorithm:** **MUSE** (Machine Unlearning Six-way Evaluation, 2025 standard) as the state-of-the-art technique, with **SISA** remaining as the primary architectural baseline.'
        ]
    ],
    "060.mdx": [
        [
            'EU AI Act compliance.',
            'EU AI Act compliance (specifically Article 13 transparency and Article 14 human oversight requirements, which are now active compliance laws rather than upcoming proposals).'
        ]
    ],

    // Batch G (065-070)
    "065.mdx": [
        [
            '- **HITL Framework:** Custom UI interfaces or database approval queues.',
            '- **HITL Framework:** **LangGraph** (using native stateful interrupts to halt execution for human review and approval before proceeding) or standard database approval queues.'
        ]
    ],
    "066.mdx": [
        [
            '- **Search Patterns:** **Tree of Thoughts** (ToT) or **Monte Carlo Tree Search** (MCTS).',
            '- **Search Patterns:** **Tree of Thoughts** (ToT) or **Monte Carlo Tree Search** (MCTS). Note that o1/o3/Claude 3.7 extended thinking now perform internal search natively via inference-time compute budgets.'
        ]
    ],
    "067.mdx": [
        [
            '- **Framework:** **Microsoft AutoGen** (popular multi-agent framework).',
            '- **Framework:** **LangGraph** (for graph-based stateful agent routing), **AutoGen 0.4** (major async and event-driven update), **CrewAI** (role-based agent execution), or **OpenAI Swarm** (lightweight handoff patterns).'
        ]
    ],
    "068.mdx": [
        [
            '- **Tracing:** **OpenTelemetry** or standard logging.',
            '- **Tracing:** **Langfuse**, **Arize Phoenix**, or **LangSmith** for specialized multi-agent tracing and interaction logging.'
        ]
    ],
    "069.mdx": [
        [
            '- **Benchmarks:** Custom evaluation suites.',
            '- **Benchmarks:** **AgentBench**, **WebArena**, or **tau-bench** (specifically designed for evaluating multi-agent and tool-use performance).'
        ]
    ],

    // Batch H (075-080)
    "075.mdx": [
        [
            '- **Vision Model:** **CLIP** (Contrastive Language-Image Pretraining) or standard CNNs.',
            '- **Vision Model:** **GPT-4o Vision**, **Gemini Vision**, **LLaVA-1.6**, **Qwen-VL**, or **InternVL2** for native multi-modal operations, with **CLIP** remaining as a key foundational embedding extractor.'
        ]
    ],
    "076.mdx": [
        [
            '- **Alignment:** **DPO** (Direct Preference Optimization).',
            '- **Alignment:** **DPO** (now the industry standard), **SimPO** (Simple Preference Optimization), **ORPO** (Odds Ratio Preference Optimization), or **GRPO** (Group Relative Policy Optimization, utilized in DeepSeek-R1 training).'
        ]
    ],
    "077.mdx": [
        [
            '- **Interface:** Streamed text markdown.',
            '- **Interface:** **Vercel AI SDK** (for React Server Components streaming), **Claude\'s Artifacts** panel, or **OpenAI Canvas** for interactive, AI-driven collaborative workspaces. UI tools like **shadcn/ui** and **v0.dev** are the standards.'
        ]
    ],
    "078.mdx": [
        [
            '- **Access Control:** Metadata-based filtering in vector databases.',
            '- **Access Control:** Pinecone v3+ metadata filtering or Qdrant\'s payload-based filtering to enforce document-level ACLs.'
        ]
    ],
    "079.mdx": [
        [
            '- **Fine-Tuning:** **HuggingFace TRL** or cloud managed training.',
            '- **Fine-Tuning:** **OpenAI Fine-Tuning API** (now supporting GPT-4o), **Together AI**, or **Fireworks AI** as scalable fine-tuning platforms.'
        ]
    ],

    // Batch I (083-090)
    "090.mdx": [
        [
            'proposed structural architectural fixes to prevent recurrence.',
            'proposed structural architectural fixes. Enterprise tools like **Rootly** or **incident.io** are standard for War Room organization alongside PagerDuty.'
        ]
    ]
};

function applyUpdates() {
    console.log("Applying updates to MDX files...");
    let modifiedCount = 0;
    
    for (const [filename, fileUpdates] of Object.entries(updates)) {
        if (!fileUpdates || fileUpdates.length === 0) continue;
        
        const filepath = path.join(DAYS_DIR, filename);
        if (!fs.existsSync(filepath)) {
            console.log(`File not found: ${filepath}`);
            continue;
        }
        
        let content = fs.readFileSync(filepath, 'utf8');
        // Standardize line endings to LF to avoid issues with CRLF vs LF
        content = content.replace(/\r\n/g, '\n');
        
        let modified = false;
        
        for (const [target, replacement] of fileUpdates) {
            // Also standardize target string line endings to LF
            const normalizedTarget = target.replace(/\r\n/g, '\n');
            const normalizedReplacement = replacement.replace(/\r\n/g, '\n');
            
            if (content.includes(normalizedTarget)) {
                content = content.split(normalizedTarget).join(normalizedReplacement);
                modified = true;
            }
        }
        
        if (modified) {
            // Write back with local platform line endings
            fs.writeFileSync(filepath, content, 'utf8');
            console.log(`Successfully updated ${filename}`);
            modifiedCount++;
        } else {
            console.log(`No changes made to ${filename} (target strings not found)`);
        }
    }
    
    console.log(`Finished. Modified ${modifiedCount} files.`);
}

applyUpdates();
