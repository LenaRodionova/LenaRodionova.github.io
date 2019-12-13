import "./style/style-analytics.css";
import AnalyticManager from "./scripts/analytics/analytic-manager";
import CardStorage from "./scripts/card-storage";
import AnalyticBlock from "./scripts/analytics/analytic-block";
import AnalyticCalculator from "./scripts/analytics/analytic-calculator";
import {dateShift} from "./scripts/params";

const storage = new CardStorage();
const analyticBlock = new AnalyticBlock();
const analyticCalculator = new AnalyticCalculator(dateShift);

const analyticManager = new AnalyticManager(storage, analyticBlock, analyticCalculator);
analyticManager.displayAnalytic();
