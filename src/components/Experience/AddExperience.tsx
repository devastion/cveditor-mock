/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Popover } from "react-tiny-popover";
import { addExperience } from "../../store/experienceSlice";
import { useAppDispatch } from "../../store/hooks";
import { Props } from "./Experience";
import * as styles from "./Experience.module.scss";

export default function AddExperience() {
  const dispatch = useAppDispatch();
  const initialValues: Props = {
    title: "",
    company: "",
    date: "",
    city: "",
    description: "",
  };
  const [values, setValues] = React.useState<Props>(initialValues);
  const [pop, setPop] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const data = [
    {
      range: [10, 23],
      message:
        "This is vague. Instead of “Managed projects for many clients”, say “Managed projects for 10 clients including BlueBank.”",
    },
    {
      range: [0, 23],
      message:
        'Include a valuable metric if possible. For example: "Increased revenue by 20% within one month.".',
    },
  ];

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const isNotEmpty = Object.values(values).every((x) => x);

  const handleSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    if (isNotEmpty) {
      dispatch(addExperience(values));
      setValues(initialValues);
    } else {
      // eslint-disable-next-line no-alert
      alert("Fill all fields, please!");
    }
  };
  const handleTextArea: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ): void => {
    const { value } = e.target;

    setValues({
      ...values,
      description: value,
    });
  };

  const handlePopover: React.MouseEventHandler<HTMLDivElement> = (e): void => {
    const { innerText }: any = e.target;
    if (innerText === "I've done ") {
      setMessage(data[1]?.message || "");
      setPop(true);
    }
    if (innerText === "many projects") {
      setMessage(data[0]?.message || "");
      setPop(true);
    }
  };
  // const handleKeyPress: React.KeyboardEventHandler<KeyboardEvent> = (e): void => {};
  const handleHighlight = () =>
    values.description
      .replace(/\n$/gi, "\n\n")
      .replace(/I've done /gi, "<mark><span>$&</span></mark>")
      .replace(/many projects/gi, "<mark><span>$&</span></mark>");

  return (
    <div className={styles.inner}>
      <form onSubmit={handleSubmit} id="add-experience">
        <div className={`${styles.input} ${styles.title}`}>
          <input
            data-testid="title-input"
            className={`${styles.field} ${styles.title}`}
            value={values.title}
            onChange={handleChange}
            type="text"
            name="title"
            id="title"
            // My favorite number, not a magic :D
            maxLength={57}
            placeholder=" "
          />
          <label
            data-testid="title-label"
            htmlFor="title"
            className={`${styles.label} ${styles.title}`}>
            CV Editor Mock
          </label>
        </div>

        <div className={`${styles.input} ${styles.company}`}>
          <input
            data-testid="company-input"
            className={`${styles.field} ${styles.company}`}
            type="text"
            name="company"
            id="company"
            maxLength={20}
            placeholder=" "
            value={values.company}
            onChange={handleChange}
          />
          <label
            data-testid="company-label"
            htmlFor="company"
            className={`${styles.label} ${styles.company}`}>
            Company Name
          </label>
        </div>
        <div className={styles.info}>
          <div className={`${styles.input} ${styles.info}`}>
            <input
              data-testid="date-input"
              className={`${styles.field} ${styles.info}`}
              type="date"
              name="date"
              id="date"
              placeholder=" "
              onChange={handleChange}
            />
            <label
              data-testid="date-label"
              htmlFor="date"
              className={`${styles.label} ${styles.info}`}>
              Date Period
            </label>
          </div>
          <div className={`${styles.input} ${styles.info}`}>
            <input
              data-testid="city-input"
              className={`${styles.field} ${styles.info}`}
              type="text"
              name="city"
              id="city"
              maxLength={30}
              placeholder=" "
              value={values.city}
              onChange={handleChange}
            />

            <label
              data-testid="city-label"
              htmlFor="city"
              className={`${styles.label} ${styles.info}`}>
              Sofia, BG
            </label>
          </div>
        </div>

        <div className={styles.wrapper}>
          <p className={styles.note}>
            Note: Type &quot;I&apos;ve done many projects&quot;
          </p>
          <textarea
            rows={3}
            className={`${styles.field} ${styles.description} ${styles.textarea}`}
            maxLength={200}
            name="description"
            id="description"
            placeholder="Description"
            value={values.description}
            onChange={handleTextArea}
            ref={inputRef}
          />

          <div
            onClick={() => inputRef.current?.focus()}
            className={styles.backdrop}>
            <Popover
              isOpen={pop}
              align="start"
              positions={["bottom", "top", "left", "right"]}
              onClickOutside={(): void => setPop(false)}
              content={
                <div data-testid="popover" className={styles.tooltip}>
                  <div className={styles.heading}>
                    <h1>Content Improvement</h1>
                    <div className={styles.ignore}>
                      <input
                        data-testid="popover-ignore"
                        onClick={() => setPop(false)}
                        type="checkbox"
                      />
                      <h2>Ignore</h2>
                    </div>
                  </div>
                  <p>{message}</p>
                </div>
              }>
              <div
                data-testid="description-input"
                onMouseOver={handlePopover}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: handleHighlight() }}
              />
            </Popover>
          </div>
        </div>
      </form>
    </div>
  );
}
