import "./style/style-about.css";
import "../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import Glide from '@glidejs/glide';
import GitHubCardManager from "./scripts/about/github-manager";
import GitHubApi from "./scripts/about/github-api";
import CommitBlock from "./scripts/about/commit-block";
import {githubApi, githubAuthorName, githubRepoName} from "./scripts/params";

const glide = new Glide('.glide',
  {
    type: "carousel",
    gap: 16,
    peek: 88,
    focusAt: "center",
    perView: 3,
    breakpoints: {
      900: {
        peek: 30,
        perView: 2,
      },
      700: {
        peek: 30,
        perView: 1,
      }
    }

  });

const api = new GitHubApi(githubApi, githubRepoName, githubAuthorName);
const commitList = new CommitBlock();

const githubCardManager = new GitHubCardManager(api, commitList);

githubCardManager.init(glide.mount.bind(glide));
