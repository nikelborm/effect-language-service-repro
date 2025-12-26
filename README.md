# Effect language service reproduction repo

Copy-paste reproduction template:

```bash
# CHANGE ME
BRANCH_NAME="main"

cd $(mktemp -d)
git clone --depth 1 -b $BRANCH_NAME git@github.com:nikelborm/effect-language-service-repro.git
cd effect-language-service-repro/
# possible warning of mise could be ignored
bun install --frozen-lockfile
code . ./index.ts
```

To unshallow the repo and get access to all other branches:

```bash
git fetch --unshallow
git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
git fetch --all
```
