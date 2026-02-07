---
name: Content Quality Audit
description: Comprehensive analysis skill for auditing and enhancing the quality of Veritas "100 Days of Responsible AI Engineering" content. Ensures state-of-the-art information, proper sequencing, and consistent excellence.
---

# Content Quality Audit Skill

## Purpose

This skill enables systematic analysis of Veritas content to ensure:

- **State-of-the-Art Accuracy** - Information reflects current best practices and latest developments
- **Proper Sequencing** - Articles build logically on previous days and prepare for upcoming topics
- **Consistent Quality** - All content meets the high standards expected by senior engineers
- **Completeness** - No critical concepts are missing from coverage

---

## Audit Workflow

### Phase 1: Single Article Deep Audit

When auditing a specific day (e.g., Day 042), perform this checklist:

#### 1.1 Frontmatter Validation

```yaml
Required fields:
- title: Must be descriptive and engaging
- failure: The specific failure mode this day prevents
- lens: Primary responsibility lens (Governance, Safety, Ethics, etc.)
- domain: Technical domain (MLOps, LLMs, Data Infra, etc.)
- day: 3-digit padded number
- status: "locked" or "done"
- tags: Array of 2-4 relevant tags
- date: ISO date format (YYYY-MM-DD)
```

#### 1.2 Content Structure Audit

Check that all 11 sections are present and properly populated:

| Section                             | Quality Criteria                                       |
| ----------------------------------- | ------------------------------------------------------ |
| **Abstract**                        | 2-3 sentences, clearly states the problem and solution |
| **Why This Topic Matters**          | Connects to real-world failure scenarios               |
| **Core Concepts & Mental Models**   | Provides actionable mental frameworks                  |
| **Production-Grade Implementation** | Code is realistic, not toy examples                    |
| **Hands-On Project**                | Practical, can be completed in <30 min                 |
| **Trade-offs**                      | Honest about costs, complexity, and alternatives       |
| **Ethics/Security/Safety**          | Addresses responsible AI implications                  |
| **Business Implications**           | Translates tech to business value                      |
| **Pitfalls & Misconceptions**       | Lists common mistakes to avoid                         |
| **Prerequisites & Next Steps**      | Links to other days properly                           |
| **Further Reading**                 | 2-4 high-quality external resources                    |

#### 1.3 Technical Accuracy Check

For each code example, verify:

- [ ] Uses current library versions (not deprecated APIs)
- [ ] Follows production best practices
- [ ] Includes error handling
- [ ] Has proper async patterns where applicable
- [ ] Comments explain _why_, not just _what_

#### 1.4 State-of-the-Art Assessment

Research and compare against:

- Latest official documentation of mentioned tools
- Recent conference papers (NeurIPS, ICML, ACL)
- Industry best practices from leading AI companies
- Recent blog posts from tool maintainers

**Flag for update if:**

- Library version is >6 months old
- A better tool/approach now exists
- New regulatory requirements affect the guidance
- Significant community shift in best practices

---

### Phase 2: Sequence Coherence Analysis

#### 2.1 Backward Compatibility Check

Read the **previous 3 days** and verify:

- [ ] Current day builds on concepts already introduced
- [ ] No unexplained jargon that wasn't defined earlier
- [ ] "Prerequisites" section correctly references prior days
- [ ] Any code examples can use patterns established earlier

#### 2.2 Forward Compatibility Check

Read the **next 3 days** and verify:

- [ ] Current day properly sets up future concepts
- [ ] "Next Steps" section accurately describes upcoming content
- [ ] No concepts are introduced that make future days redundant
- [ ] Learning curve is gradual, not jarring

#### 2.3 Cross-Reference Integrity

Check all internal links and references:

- [ ] Day numbers mentioned actually exist
- [ ] Topic references are accurate
- [ ] No circular dependencies in prerequisites
- [ ] Phase transitions (Day 20, 40, 60, 80) are properly milestone content

---

### Phase 3: Quality Scoring Rubric

Rate each article on a 1-5 scale for each dimension:

| Dimension           | 1 (Poor)                | 3 (Acceptable)    | 5 (Excellent)                      |
| ------------------- | ----------------------- | ----------------- | ---------------------------------- |
| **Technical Depth** | Surface-level overview  | Good fundamentals | Novel insights, edge cases covered |
| **Practical Value** | Theoretical only        | Working examples  | Production-ready patterns          |
| **Clarity**         | Confusing, jargon-heavy | Clear with effort | Immediately understandable         |
| **Originality**     | Generic rehash          | Solid synthesis   | Unique perspective or framework    |
| **Completeness**    | Major gaps              | Covers basics     | Comprehensive coverage             |
| **Freshness**       | Outdated info           | Current           | Cutting-edge or forward-looking    |

**Target Score:** 4.0+ average across all dimensions

---

### Phase 4: Enhancement Recommendations

After auditing, produce an enhancement report:

```markdown
## Day [XXX] Audit Report

### Summary

- Overall Score: X.X/5.0
- Status: PASS / NEEDS IMPROVEMENT / CRITICAL UPDATE

### Strengths

1. [What's working well]
2. [Unique value provided]

### Issues Found

#### High Priority (Must Fix)

- [ ] Issue description and location

#### Medium Priority (Should Fix)

- [ ] Issue description and location

#### Low Priority (Nice to Have)

- [ ] Enhancement suggestion

### Recommended Updates

1. [Specific change with rationale]
2. [Specific change with rationale]

### State-of-the-Art Gaps

- [Tool/technique] has been superseded by [newer approach]
- [Reference] should be added: [URL]

### Sequence Issues

- Missing link to Day [XXX] which covers prerequisite concept
- "Next Steps" should mention Day [XXX] instead of [YYY]
```

---

## Domain-Specific Quality Criteria

### For MLOps Days (001-020, various others)

- Must include realistic pipeline code
- Should reference industry standards (ML Metadata, MLflow, etc.)
- Need to address scale considerations

### For LLM Days (015, 021-027, 032-037, etc.)

- Must use current API patterns (not deprecated endpoints)
- Should address cost optimization
- Need to cover safety/guardrails
- Reference latest model capabilities

### For Data Infrastructure Days

- Must show schema evolution patterns
- Should address data quality validation
- Need to cover lineage and governance

### For Ethics/Governance Days

- Must reference relevant regulations (EU AI Act, GDPR, etc.)
- Should avoid abstract moralizing - be practical
- Need to provide auditable patterns

---

## Batch Audit Commands

### Audit a Date Range

When asked to audit multiple days (e.g., "Audit Days 041-050"):

1. Run Phase 1 on each day individually
2. Run Phase 2 sequence check across the range
3. Produce consolidated report with:
   - Summary statistics
   - Cross-cutting issues
   - Priority ordering for fixes

### Full Series Audit

For comprehensive series review:

1. Verify all 50 days in registry have corresponding MDX files
2. Check phase structure:
   - Days 001-020: Foundation Phase
   - Days 021-040: LLM & RAG Phase
   - Days 041-060: Production Hardening Phase
   - Days 061-080: Advanced Topics Phase
   - Days 081-100: Integration & Capstone Phase
3. Ensure capstone days (020, 040, 060, 080, 100) integrate prior concepts
4. Check topic distribution across lenses is balanced

---

## Quality Benchmarks

### Code Example Quality

- **Good:** Simple working example demonstrating concept
- **Better:** Handles edge cases, includes logging
- **Best:** Production-ready with error handling, monitoring, and tests

### External Reference Quality

- **Avoid:** Random blog posts, outdated tutorials
- **Prefer:** Official docs, peer-reviewed papers, talks from tool creators
- **Best:** Primary sources, academic papers, official design docs

### Explanation Quality

- **Avoid:** Dense paragraphs of theory
- **Prefer:** Concept → Example → Gotcha → Best Practice flow
- **Best:** Mental model first, then implementation details

---

## Trigger Phrases

This skill should be activated when the user requests:

- "Audit Day XXX"
- "Review the quality of..."
- "Is this content up to date?"
- "Check the sequence for..."
- "Analyze Days XX-YY"
- "Make sure this is state of the art"
- "Review content quality"
- "Check if anything is outdated"

---

## Output Format

Always structure audit output as:

```
📊 CONTENT AUDIT: Day [XXX] - [Title]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ PASSED CHECKS
• [Check description]

⚠️ WARNINGS
• [Warning description]

❌ ISSUES FOUND
• [Issue description]

📈 SCORES
• Technical Depth:   ⭐⭐⭐⭐☆ (4/5)
• Practical Value:   ⭐⭐⭐⭐⭐ (5/5)
• ...

🔗 SEQUENCE STATUS
• Builds on: Day [XXX], Day [YYY]
• Prepares for: Day [ZZZ]
• Links verified: ✓

📝 RECOMMENDATIONS
1. [Prioritized recommendation]
2. [Prioritized recommendation]
```

---

## Resources for Verification

When checking state-of-the-art accuracy, consult:

### Official Documentation

- OpenAI API Docs: https://platform.openai.com/docs
- Anthropic Docs: https://docs.anthropic.com
- LangChain: https://python.langchain.com/docs
- LlamaIndex: https://docs.llamaindex.ai
- MLflow: https://mlflow.org/docs/latest
- Weights & Biases: https://docs.wandb.ai
- Hugging Face: https://huggingface.co/docs

### Regulatory & Standards

- EU AI Act: https://artificialintelligenceact.eu
- NIST AI RMF: https://www.nist.gov/itl/ai-risk-management-framework
- ISO AI Standards: ISO/IEC 42001

### Research

- arXiv (cs.LG, cs.CL): https://arxiv.org
- Papers With Code: https://paperswithcode.com
- Semantic Scholar: https://semanticscholar.org
