# Effect language service reproduction repo

Copy-paste reproduction template:

```bash
BRANCH_NAME="quickinfo-unresolved-yieldwraps"

cd $(mktemp -d)
git clone --depth 1 -b $BRANCH_NAME git@github.com:nikelborm/effect-language-service-repro.git
cd effect-language-service-repro/

# Possible warning of mise could be ignored, because `mise` is not needed for reproduction.
# Although you can disable the warning by uncommenting the following line
# mise trust

bun install --frozen-lockfile
code . ./index.ts
```

To unshallow the repo and get access to all other branches:

```bash
git fetch --unshallow
git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"
git fetch --all
```
