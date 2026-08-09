git commit --amend --reset-author --no-edit
git reset --hard HEAD~5
git log --oneline -> to count commits
git rebase -i HEAD~5 -> to delete a specific commit

git revert <commit-hash>
git revert --no-edit <commit-hash>
git revert --no-commit <commit-hash>
git revert <oldest-hash>^..<newest-hash>
git revert -m 1 <merge-commit-hash>
