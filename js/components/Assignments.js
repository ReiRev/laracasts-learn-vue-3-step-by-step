import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>
            <assignment-list
                v-show="showCompleted"
                :assignments="filters.completed" 
                title="Completed"
                can-toggle
                @toggle="showCompleted=!showCompleted"
            ></assignment-list>
        </section>
    `,
    data() {
        return {
            assignments: [],
            showCompleted: true,
        };
    },
    created() {
        fetch('http://localhost:3001/assignments').then(
            response => response.json()
        ).then((assignments) => {
            this.assignments = assignments;
        })
    },
    computed: {
        inProgress() {
            return this.assignments.filter((a) => !a.complete);
        },
        completed() {
            return this.assignments.filter((a) => a.complete);
        },
        filters() {
            return {
                inProgress: this.assignments.filter((a) => !a.complete),
                completed: this.assignments.filter((a) => a.complete),
            }
        }
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1,
            })
        }
    }
}