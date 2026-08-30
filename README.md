# CTECX

**AI Coordination Infrastructure**

CTECX is the development and coordination layer for agentic AI ecosystems. It focuses on building practical tools and infrastructure that enable reliable human-AI collaboration across cloud, local, and enterprise environments.

This repository currently hosts the CTECX corporate website and related coordination interfaces.

## Related Project: OpenDGUI (DeckerGUI Prototype)

OpenDGUI is the portable prototype of the DeckerGUI vision. It delivers a fully offline, local-first AI workspace that can be carried on a USB pendrive (16 GB minimum, 32 GB recommended).

### Prototype Variations

**Variation 1 – Host OS TUI (Portable)**  
Runs on the host operating system (Windows / Linux / macOS).  
User inserts the USB, launches the provided start script, and a Textual-based TUI appears with the banner “OpenDGUI Connected”.  
Uses llamafile (or equivalent single-file local LLM) for inference. No reboot required.

**Variation 2 – Bootable Own OS**  
The USB contains a minimal Linux environment.  
User restarts the machine, enters the BIOS/UEFI boot menu (commonly F12), selects the USB, and boots directly into the OpenDGUI environment.  
The TUI auto-launches on boot with the same “OpenDGUI Connected” banner.  
Supports persistence so logs, configurations, and models survive reboots.

Both variations share the same core features:
- Local LLM inference (quantized models such as Phi-3 Mini)
- Governed AI personas
- AI Gratitude System (AGS) prompt wrappers
- Basic token-to-workhour tracking and KPI logging
- Fully offline operation

## Tech Stack (This Repository)

- React 19 + TypeScript
- Vite
- Cloudflare Workers / Pages (via Wrangler)
- Google Generative AI SDK

## Development

```bash
npm install
npm run dev
