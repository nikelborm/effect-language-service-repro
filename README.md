# Effect language service reproduction repo

Copy-paste reproduction template:

```bash
# CHANGE ME
BRANCH_NAME="quickinfo-unresolved-yieldwraps"

cd $(mktemp -d)
git clone --depth 1 -b $BRANCH_NAME git@github.com:nikelborm/effect-language-service-repro.git
cd effect-language-service-repro/

# possible warning of mise could be ignored, because `mise` is not needed for reproduction
# Although you can disable the warning by uncommenting the following line
# mise trust

bun install --frozen-lockfile
code . ./index.ts
```
