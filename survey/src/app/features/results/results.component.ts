import { Component, OnInit } from "@angular/core";
import { PageService } from "src/app/core/services/page.service";
import { LocaleService } from "src/app/core/services/locale.service";

@Component({
    selector: "app-results",
    templateUrl: "./results.component.html",
    styleUrls: ["./results.component.less"]
})
export class ResultsComponent implements OnInit {
    texts = null;
    probabilityTexts = {
        SEVERE: "high_risk_severe_symptoms_message",
        LOW: "low_risk_message",
        MEDIUM: "medium_risk_message",
        HIGH: "high_risk_message"
    };
    scenarioTexts = {
        SCENARIO_1: [
            "scenario_no_quarantine",
            "scenario_monitor_health",
            "scenario_swab_request_call_111",
            "scenario_precautions",
        ],
        SCENARIO_2: [
            "scenario_quarantine_2weeks",
            "scenario_monitor_health",
            "scenario_swab_request_call_111",
            "scenario_precautions",
        ],
        SCENARIO_3: [
            "scenario_call_111",
            "scenario_home_care_2weeks",
            "scenario_symptoms_call_doc",
            "scenario_precautions",
        ],
        SCENARIO_4: [
            "scenario_call_111",
            "scenario_home_care_2weeks",
            "scenario_symptoms_call_doc",
            "scenario_precautions",
        ],
        SCENARIO_5: [
            "scenario_call_111",
            "scenario_if_close_contact_2weeks",
            "scenario_neg_test_no_work",
            "scenario_symptoms_call_doc",
            "scenario_precautions",
        ],
        SCENARIO_6: [
            "scenario_call_111",
            "scenario_if_close_contact_2weeks",
            "scenario_neg_test_no_work",
            "scenario_symptoms_call_doc",
            "scenario_precautions",
        ],
        SCENARIO_7: [
            "scenario_call_111",
            "scenario_neg_test_no_work",
            "scenario_symptoms_call_doc",
            "scenario_precautions",
        ],
        SCENARIO_8: [
            "scenario_call_111",
            "scenario_close_contact_2weeks",
            "scenario_symptoms_call_doc",
            "scenario_precautions",
        ],
        SCENARIO_9: [
            "scenario_call_111",
            "scenario_age_chronic_risk_warning",
            "scenario_neg_test_stay_home",
            "scenario_symptoms_call_doc",
            "scenario_emergency_112",
            "scenario_precautions",
        ],
        SCENARIO_10: [
            "scenario_call_111_if_symptoms",
            "scenario_if_close_contact_2weeks",
            "scenario_precautions",
        ],
        SCENARIO_11: [
            "scenario_call_111",
            "scenario_stay_at_home_symptoms_subside",
            "scenario_symptoms_monitor_call_doc",
            "scenario_precautions",
        ],
        SCENARIO_12: [
            "scenario_call_111",
            "scenario_stay_at_home_symptoms_subside",
            "scenario_symptoms_monitor_call_doc",
            "scenario_if_close_contact_2weeks",
            "scenario_precautions",
        ]
    };

    constructor(
        public pageService: PageService,
        public localeService: LocaleService
    ) { }

    ngOnInit() {
        if (this.pageService.submissionResult) {
            this.texts = {
                message: this.probabilityTexts[
                    this.pageService.submissionResult.probability
                ],
                risk_message: this.pageService.submissionResult.risk_message,
                act_message: this.pageService.submissionResult.act_message,
                instructions: this.scenarioTexts[
                    this.pageService.submissionResult.scenario
                ]
            };
        }
    }
}
