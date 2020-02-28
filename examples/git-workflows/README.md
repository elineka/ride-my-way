

1) What is a feature branch?

is a branch that is created from develop. Feature branches, it uses individual branches for preparing, maintaining, and recording releases. Each new feature should reside in its own branch, which can be pushed to the central repository for backup/collaboration. When a feature is complete, it gets merged back into develop.

2) How does a feature branch differ from a hotfix branch?

-a feature it is created from develop while hotfix branch created from master when an issue in master is detected.
-Once the feature branch is complete it si merged to develop while when the hotfix is complete it is merged to both develop and master
-feature branch are used individual branches for preparing, maintaining, and recording releases while Maintenance or “hotfix” branches are used to quickly patch production releases.

3) How does a feature branch differ from a release branch?

-Release branch is created once develop has acquired enough features for a release, this branch starts the next release cycle, so no new features can be added after this point—only bug fixes, documentation generation, and other release-oriented tasks should go in this branch. While feature branch are used individual branches for preparing, maintaining, and recording releases
-When a feature is complete it is merged into the develop branch while When the release branch is done it is merged into develop and master

4) How does the master and develop branch relate to each other?
Example we have a releasing project, instead of a single master branch, git workflow uses two branches to record the history of the project. The master branch stores the official release history, and the develop branch serves as an integration branch for feature.
When the source code in the develop branch reaches a stable point and is ready to be released, all of the changes should be merged back into master some how and then tagged with a release number.

5)Referencing the awesome article by Atlassian, comparing workflows, which workflow would you say is your favorite and why?

Git Feature Branch Workflow
because:
a) all feature development should take place in a dedicated branch instead of the master branch. This encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase. It also means the master branch will never contain broken code, which is a huge advantage for continuous integration environments.
b) feature development also makes it possible to leverage pull requests, which are a way to initiate discussions around a branch. They give other developers the opportunity to sign off on a feature before it gets integrated into the official project. Or, if you get stuck in the middle of a feature, you can open a pull request asking for suggestions from your colleagues. The point is, pull requests make it incredibly easy for your team to comment on each other’s work.

c) feature branch workflow helps organize and track branches that are focused on business domain feature sets.

